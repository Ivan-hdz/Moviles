import {Injectable} from "@angular/core";
import {Usuario} from "~/app/home/classes/Usuario";
import {getJSON} from "tns-core-modules/http";
import {ENDPOINT} from "~/app/values/strings";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs";
import {setString} from "tns-core-modules/application-settings";

@Injectable({
    providedIn: "root"
})
export class UserService {
    private COLLECTION = "/user";
    private CONTENT_TYPE = 'application/json; charset=UTF-8';
    private URL = ENDPOINT + this.COLLECTION;
    public siguienteEsModificacion = false;
    public usrOnBufferToModificar: Usuario;
    constructor(private http: HttpClient) {
        this.siguienteEsModificacion = false;
        this.usrOnBufferToModificar = null;
    }
    alta(u: Usuario): Promise<boolean> {
        if(this.siguienteEsModificacion) {

            this.siguienteEsModificacion = false;
            this.usrOnBufferToModificar = null;
            return this.modifica(u);
        } else {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': this.CONTENT_TYPE
                }),
                responseType: 'json' as 'json'
            };
            return this.http.post<boolean>(this.URL,u, httpOptions).toPromise();
        }
    }
    baja(u: Usuario): Promise<boolean> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': this.CONTENT_TYPE,
                'id': u.correo
            }),
            params: {id: u.correo}
        };
        return this.http.delete<boolean>(this.URL, httpOptions).toPromise();
    }
    modifica(u: Usuario): Promise<boolean> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': this.CONTENT_TYPE
            }),
            responseType: 'json' as 'json'
        };
        return this.http.patch<boolean>(this.URL, u, httpOptions).toPromise();
    }
    consulta(correo: string = ''): Promise<Usuario[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                  'Content-Type': this.CONTENT_TYPE,
                'id': correo
            }),
            params: {id: correo}
        };
        return this.http.get<Usuario[]>(this.URL, httpOptions).toPromise();
    }
    async fetchData() {

        try {
            const arr = await this.consulta();
            if(arr) {
                setString('db', JSON.stringify(arr));
            }
        } catch (e) {
            console.log(e.toString());
        }

    }
}
