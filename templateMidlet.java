/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package primos;

import javax.microedition.midlet.*;
import javax.microedition.lcdui.*;

/**
 * @author honte
 */
public class HelloMIDlet extends MIDlet implements CommandListener {
    
    private boolean midletPaused = false;
    private TextField txt_primo;
    
    public TextField getTxtPrimo() {
        if(this.txt_primo == null) {
            this.txt_primo = new TextField("Es primo?", "", 32, 0);
        }
        return this.txt_primo;
    }
    
    private Command calcCommand;
    
    public Command getCalcCommand() {
        if(calcCommand == null){
            calcCommand = new Command("Verificar", Command.OK, 0);
        }
        return calcCommand;
    }

    private Command exitCommand;
    private Form form;
    
    public HelloMIDlet() {
    }
    private void initialize() {
    }   
    public void startMIDlet() {
        switchDisplayable(null, getForm());
    }
    public void resumeMIDlet() {

    }

    public void switchDisplayable(Alert alert, Displayable nextDisplayable) {
        Display display = getDisplay();
        if (alert == null) {
            display.setCurrent(nextDisplayable);
        } else {
            display.setCurrent(alert, nextDisplayable);
        }
    }
   public void commandAction(Command command, Displayable displayable) {
        if (displayable == form) {
            if (command == exitCommand) {
                exitMIDlet();
            } else if(command == calcCommand) {
                testPrimo();
            }
        }
    }

    public Command getExitCommand() {
        if (exitCommand == null) {
            exitCommand = new Command("Exit", Command.EXIT, 0);
        }
        return exitCommand;
    }

    public Form getForm() {
        if (form == null) {
            form = new Form("Welcome", new Item[]{});
            form.addCommand(getExitCommand());
            form.setCommandListener(this);
            }
        return form;
    }


    public Display getDisplay() {
        return Display.getDisplay(this);
    }

    public void exitMIDlet() {
        switchDisplayable(null, null);
        destroyApp(true);
        notifyDestroyed();
    }

    public void startApp() {
        if (midletPaused) {
            resumeMIDlet();
        } else {
            initialize();
            startMIDlet();
        }
        midletPaused = false;
    }

    public void pauseApp() {
        midletPaused = true;
    }
    
    public void destroyApp(boolean unconditional) {
    }
    
}
