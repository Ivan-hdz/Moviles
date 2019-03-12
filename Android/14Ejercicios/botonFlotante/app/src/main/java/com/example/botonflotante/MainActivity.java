package com.example.botonflotante;

import android.app.Activity;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.view.View;
import android.widget.Toast;
public class MainActivity extends Activity {
    FloatingActionButton jfab;

    protected void onCreate(Bundle b) {
        super.onCreate(b);
        setContentView(R.layout.activity_main);
        jfab = (FloatingActionButton) findViewById(R.id.xfab);
        jfab.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                Toast.makeText(MainActivity.this, "Soy un botón Flotante!", Toast.LENGTH_LONG).show();
            }
        });
    }
}
