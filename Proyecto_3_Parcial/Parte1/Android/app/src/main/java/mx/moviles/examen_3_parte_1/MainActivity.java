package mx.moviles.examen_3_parte_1;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.widget.TextView;


import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

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

    private class MyDatagramReceiver extends Thread implements SensorEventListener {
        private boolean bKeepRunning = true;
        private final String UDP_SERVER_ADDR = "192.168.1.255";
        private final int MAX_UDP_DATAGRAM_LEN = 90000;
        private final int UDP_SERVER_PORT = 3000;
        private String lastMessage = "";
        private DatagramSocket socket;
        DatagramPacket packet;
        private SensorManager senSensorManager;
        private Sensor senAccelerometer;
        private StringBuffer sb;
        private float x;
        private float y;
        private float z;

        public void run() {
            String message;
            x = 0.0f;
            y = 0.0f;
            z = 0.0f;
            byte[] lmessage = new byte[100];

            senSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
            senAccelerometer = senSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
            senSensorManager.registerListener( this, senAccelerometer , SensorManager.SENSOR_DELAY_NORMAL);

            try {
                socket = new DatagramSocket();
                while(bKeepRunning) {
                    sb = new StringBuffer();
                    sb.append(getX()); sb.append(';'); sb.append(getY()); sb.append(';'); sb.append(getZ());

                    packet = new DatagramPacket(sb.toString().getBytes(),
                            sb.toString().getBytes().length,
                            InetAddress.getByName(UDP_SERVER_ADDR),
                            UDP_SERVER_PORT
                            );
//                    socket.setBroadcast(true);
                    socket.send(packet);
                    lastMessage = sb.toString();
                    System.out.println(lastMessage);
                    runOnUiThread(updateTextMessage);
                    Thread.sleep(250);
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
            senSensorManager.unregisterListener(this);
        }

        public String getLastMessage() {
            return lastMessage;
        }

        @Override
        public void onSensorChanged(SensorEvent event) {
            Sensor mySensor = event.sensor;
            if (mySensor.getType() == Sensor.TYPE_ACCELEROMETER) {
                setX(event.values[0]);
                setY(event.values[1]);
                setZ(event.values[2]);
            }
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }

        public float getX() {
            return x;
        }

        public void setX(float x) {
            this.x = x;
        }

        public float getY() {
            return y;
        }

        public void setY(float y) {
            this.y = y;
        }

        public float getZ() {
            return z;
        }

        public void setZ(float z) {
            this.z = z;
        }
    }

    private Runnable updateTextMessage = new Runnable() {
        public void run() {
            TextView iv = (TextView) findViewById(R.id.txt_result);
            if (myDatagramReceiver == null) return;
            StringBuilder sb = new StringBuilder();
            sb.append("x: "); sb.append(myDatagramReceiver.getX()); sb.append('\n');
            sb.append("y: "); sb.append(myDatagramReceiver.getY()); sb.append('\n');
            sb.append("z: "); sb.append(myDatagramReceiver.getZ()); sb.append('\n');
            iv.setText(sb.toString());
        }
    };
}

