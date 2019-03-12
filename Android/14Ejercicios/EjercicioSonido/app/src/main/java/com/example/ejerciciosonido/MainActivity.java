package com.example.ejerciciosonido;

import android.app.Activity;
import android.os.Bundle;
import android.media.MediaPlayer;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.*;
public class MainActivity extends Activity {
    MediaPlayer mp;
    Button btn;
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        setContentView(R.layout.activity_main);
        btn=(Button)findViewById(R.id.btnSonido);
        btn.setOnClickListener(new OnClickListener(){
           public void onClick(View v){
               mp=MediaPlayer.create(MainActivity.this,R.raw.sonido);
               mp.start();
           }
        });
    }
    public void onDestroy(){
        mp.stop();
        super.onDestroy();
    }
}
