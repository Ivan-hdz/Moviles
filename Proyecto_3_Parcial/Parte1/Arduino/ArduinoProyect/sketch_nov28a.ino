String s;
const char ADELANTE = 'a';
const char ATRAS = 'b';
const char DERECHA = 'c';
const char IZQUIERDA = 'd';
const char ARRIBA = 'e';
const char ABAJO = 'f';
const int pin_ADELANTE = 8;
const int pin_ATRAS = 9;
const int pin_DERECHA = 10;
const int pin_IZQUIERDA = 11;
const int pin_ARRIBA = 12;
const int pin_ABAJO = 13;
void setup() {
  // put your setup code here, to run once:
  // analogReference(INTERNAL);
  Serial.begin(9600);
  pinMode(pin_ADELANTE, OUTPUT);
  pinMode(pin_ATRAS, OUTPUT);
  pinMode(pin_DERECHA, OUTPUT);
  pinMode(pin_IZQUIERDA, OUTPUT);
  pinMode(pin_ARRIBA, OUTPUT);
  pinMode(pin_ABAJO, OUTPUT);
 // BTserial.begin(9600);
}

void apagaTodos() {
  digitalWrite(pin_ADELANTE, LOW);
  digitalWrite(pin_ATRAS, LOW);
  digitalWrite(pin_DERECHA, LOW);
  digitalWrite(pin_IZQUIERDA, LOW);
  digitalWrite(pin_ARRIBA, LOW);
  digitalWrite(pin_ABAJO, LOW);
}

void loop() {
  if(Serial.available())
  {
    apagaTodos();
    char c = Serial.read();
    if(c == ARRIBA){
      digitalWrite(pin_ARRIBA, HIGH);
    } else if(c == ABAJO) {  
      digitalWrite(pin_ABAJO, HIGH);
    } else if(c == IZQUIERDA) {
      digitalWrite(pin_IZQUIERDA, HIGH);
    } else if(c == DERECHA) {
      digitalWrite(pin_DERECHA, HIGH);
    } else if(c == ADELANTE) {
      digitalWrite(pin_ADELANTE, HIGH);
    } else if(c == ATRAS) {
      digitalWrite(pin_ATRAS, HIGH);
    }
    Serial.flush();
  }
    
}


