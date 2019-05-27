import time

from cv2 import *
import base64


# def capture_frames():
#     cap = cv2.VideoCapture(0)
#     i = 0
#     while True:
#         if i == 30:
#             break
#         s, image = cap.read()
#         # Convert captured image to JPG
#         s, buffer = cv2.imencode('.jpg', image)
#         # Convert to base64 encoding and show start of data
#         jpg_as_text = base64.b64encode(buffer)
#         print(str(i) + ': ')
#         print(jpg_as_text)
#         i += 1
#         # Aqui enviar jpg_as_text
#         # Convert back to binary
#         # jpg_original = base64.b64decode(jpg_as_text)
#
#         # Write to a file to show conversion worked
#         # with open(str(i) + '.jpg', 'wb') as f_output:
#         #     f_output.write(jpg_original)
#
#         time.sleep(0.15)
#
#     cap.release()


import socket
import sys

# Create a UDP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

server_address = ('192.168.1.82', 3000)
message = b'This is the message.  It will be repeated.'

cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 100)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 100)
i = 0
try:
    while True:
        s, image = cap.read()
        # Convert captured image to JPG
        s, buffer = cv2.imencode('.jpg', image)
        # Convert to base64 encoding and show start of data
        jpg_as_text = base64.b64encode(buffer)
        # print(str(i) + ': ')
        # print(jpg_as_text)
        # Send data
        sent = sock.sendto(jpg_as_text, server_address)
        # time.sleep(0.03)

    # Receive response
    # print('waiting to receive')
    # data, server = sock.recvfrom(4096)
    # print('received {!r}'.format(data))

finally:
    print('closing socket')
    cap.release()
    sock.close()

# capture_frames();