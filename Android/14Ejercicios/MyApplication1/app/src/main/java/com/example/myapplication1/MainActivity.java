package com.example.myapplication1;

import android.app.*;
import android.os.*;
import android.view.View;
import android.widget.*;
import android.view.View.OnClickListener;

public class MainActivity extends Activity implements OnClickListener {
    Button jbn;
    TextView jtv;
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        setContentView(R.layout.activity_main);
        jbn=(Button)findViewById(R.id.xbn1);
        jbn.setOnClickListener(this);
        jtv=(TextView)findViewById(R.id.xtv1);
    }

    public void onClick(View v){
        if(v.getId()==R.id.xbn1){
            jtv.setText("\nDiego");//setText borrar el texto anterio y append agrega
        }
    }
}
