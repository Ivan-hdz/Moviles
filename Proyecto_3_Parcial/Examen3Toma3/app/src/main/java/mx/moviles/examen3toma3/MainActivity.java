package mx.moviles.examen3toma3;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Base64;
import android.widget.ImageView;
import android.widget.TextView;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.util.logging.Logger;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    private MyDatagramReceiver myDatagramReceiver = null;

    protected void onResume() {
        super.onResume();
        System.out.println("UDP Server Up");
        myDatagramReceiver = new MyDatagramReceiver();
        myDatagramReceiver.start();
    }

    protected void onPause() {
        super.onPause();
        myDatagramReceiver.kill();
    }

    private class MyDatagramReceiver extends Thread {
        private boolean bKeepRunning = true;
        private final int MAX_UDP_DATAGRAM_LEN = 90000;
        private final int UDP_SERVER_PORT = 3000;
        private String lastMessage = "";
        private DatagramSocket socket;

        public void run() {
            String message;
            byte[] lmessage = new byte[MAX_UDP_DATAGRAM_LEN];
            DatagramPacket packet = new DatagramPacket(lmessage, lmessage.length);

            try {
                socket = new DatagramSocket(UDP_SERVER_PORT);

                while(bKeepRunning) {
                    socket.receive(packet);
                    message = new String(lmessage, 0, packet.getLength());
                    lastMessage = message;
                    runOnUiThread(updateTextMessage);
                }
            } catch (Throwable e) {
                e.printStackTrace();
            }

            if (socket != null) {
                socket.close();
            }
        }

        public void kill() {
            bKeepRunning = false;
        }

        public String getLastMessage() {
            return lastMessage;
        }
    }

    private Runnable updateTextMessage = new Runnable() {
        public void run() {
            ImageView iv = (ImageView) findViewById(R.id.imgView);
            if (myDatagramReceiver == null) return;
            byte[] decodedString = Base64.decode(myDatagramReceiver.getLastMessage(), Base64.DEFAULT);
            Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
            iv.setImageBitmap(decodedByte);
        }
    };
}
