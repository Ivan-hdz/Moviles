package com.example.myapplication;

import android.app.*;
import android.os.*;
import android.view.View;
import android.widget.*;
public class MainActivity extends Activity {
    TextView jtv;
    int x,y,z;
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        setContentView(R.layout.activity_main);
        jtv=(TextView)findViewById(R.id.xtv);
        jtv.setText("Diego");
        x=3;
        y=2;
        z=x+y;
        jtv.setText(x+"+"+y+"="+z);
    }
}
