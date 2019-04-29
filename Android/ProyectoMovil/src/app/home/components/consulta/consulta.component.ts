import { Component, OnInit } from '@angular/core';
import {PageProperties} from "~/app/home/utils/PageProperties";
import {Page} from "tns-core-modules/ui/page";
import {RoutingService} from "~/app/home/services/routing.service";
import {UserService} from "~/app/home/services/user.service";
import {Usuario} from "~/app/home/classes/Usuario";
import {Observable, of} from "rxjs";
import {getString, hasKey} from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  moduleId: module.id,
})
export class ConsultaComponent extends PageProperties implements OnInit {

    buffer$: Observable<Usuario[]>;
  constructor(page: Page, public router: RoutingService, public uServ: UserService) {
      super(page);
      this.buffer$ = of([]);
      this.uServ.fetchData();
  }
    async buscar(email: string = '') {
      await this.uServ.fetchData();
      if(hasKey('db')) {
          const arr = <Usuario[]>JSON.parse(getString('db'));
          if(email === '') {
              this.buffer$ = of(arr);
          }else {
              let bandera = false;
              for(let elem of arr) {
                  if(elem.correo === email) {
                      this.buffer$ = of([elem]);
                      bandera = true;
                      break
                  }
              }
          }

      } else {
          const arr = await this.uServ.consulta(email);
          if(arr){
              this.buffer$ = of(arr);
          }
      }

    }
  ngOnInit() {
  }
  onTapModificar(usr: Usuario) {
      this.uServ.siguienteEsModificacion = true;
      this.uServ.usrOnBufferToModificar = usr;
      console.log(usr.correo);
      this.router.goAltas();
  }
    async onTapEliminar(usr: Usuario) {

      const result = await this.uServ.baja(usr);
      if(result) {
          await this.buscar();
          alert({
              title: 'Aviso',
              okButtonText: 'Continuar',
              message: 'Se ha eliminado correctamente'
          });

      } else {
          alert({
              title: 'Aviso',
              okButtonText: 'Continuar',
              message: 'Algo ha salido mal'
          })
      }
    }
}
