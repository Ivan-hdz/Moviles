import socket
import time
from serial import Serial
# sudo chmod 777 /dev/ttyACM0
arduino = Serial('/dev/ttyACM0', 9600, timeout=1)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(("0.0.0.0", 3000)) # could also use "0.0.0.0"

ADELANTE = b'a'
ATRAS = b'b'
DERECHA = b'c'
IZQUIERDA = b'd'
ARRIBA = b'e'
ABAJO = b'f'

# atras +9; adelante -9 en y
# izquierda +9 derecha -9 en x
# abajo +9 arriba -9 en z

def getDirection(string):
    x = 0.0
    y = 0.0
    z = 0.0
    arr = string.split(';')
    if arr[0][0] == '-':
        arr[0] = arr[0].replace('-', '')
        x = float(arr[0])
        x = x * -1
    else :
        x = float(arr[0])

    if arr[1][0] == '-':
        arr[1] = arr[1].replace('-', '')
        y = float(arr[1])
        y = y * -1
    else :
        y = float(arr[1])

    if arr[2][0] == '-':
        arr[2] = arr[2].replace('-', '')
        z = float(arr[2])
        z = z * -1
    else :
        z = float(arr[2])

    z = z - 9.81

    if abs(x) > abs(y) :
        if abs(x) > abs(z) :
            # x es el mas grande
            if x > 0 :
                return IZQUIERDA
            else :
                return DERECHA
        else :
            # z es el mas grande
            if z > 0 :
                return ABAJO
            else :
                return ARRIBA
    else :
        if abs(y) > abs(z) :
            # y es el mas grande
            if y > 0 :
                return ATRAS
            else :
                return ADELANTE
        else :
            # z es el mas grande
            if z > 0 :
                return ABAJO
            else :
                return ARRIBA


try:
    while True:
        arduino.flush()
        # Receive response
        # print('waiting to receive')
        data, server = sock.recvfrom(1024)
        arduino.write(getDirection(data.decode('UTF-8')))


finally:
    sock.close()
