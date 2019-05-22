import time

# Captura de video
import null as null
from cv2 import *
import base64

# Servidor para enviar las imagenes capturadas
from aiohttp import web
import socketio

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

async def captureFrame():
    cap = cv2.VideoCapture(0)
    i = 0
    while True:
        if i == 30 :
            break
        s, image = cap.read()
        # Convert captured image to JPG
        s, buffer = cv2.imencode('.jpg', image)
        # Convert to base64 encoding and show start of data
        jpg_as_text = base64.b64encode(buffer)
        print(str(i) + ': ')
        print(jpg_as_text)
        i += 1
        await sio.emit('newImage', data=jpg_as_text)
        # Convert back to binary
        # jpg_original = base64.b64decode(jpg_as_text)

        # Write to a file to show conversion worked
        # with open(str(i) + '.jpg', 'wb') as f_output:
        #     f_output.write(jpg_original)
        # await sio.sleep(0)
        time.sleep(0.13)
    cap.release()



async def index(request):
    """Serve the client-side application."""
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')


@sio.on('connect')
async def connect(sid, environ):
    await captureFrame()

@sio.on('disconnect')
def disconnect(sid, environ):
    print('Disconnected')



app.router.add_static('/', '')
app.router.add_get('/', index)

if __name__ == '__main__':
    sio.async_mode = True
    web.run_app(app)

import threading
def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper())
    t.start()
    return t