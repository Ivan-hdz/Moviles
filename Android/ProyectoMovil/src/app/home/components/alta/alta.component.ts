import { Component, OnInit } from '@angular/core';
import {RoutingService} from "~/app/home/services/routing.service";
import {Page} from "tns-core-modules/ui/page";
import {PageProperties} from "~/app/home/utils/PageProperties";
import {Usuario} from "~/app/home/classes/Usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "~/app/home/services/user.service";

@Component({
  selector: 'ns-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
  moduleId: module.id,
})
export class AltaComponent extends PageProperties implements OnInit {
    public user: Usuario;
    formulario: FormGroup;
    isLoading: boolean = false;
  constructor(public router: RoutingService, p: Page, private fb: FormBuilder, private uServ: UserService) {
      super(p);
      this.user = new Usuario();
      this.formulario = fb.group({
          correo: ['', Validators.compose([Validators.required, Validators.email])],
          contrasenia: ['', Validators.required],
          edad: [0, Validators.required],
          sexo: ['', Validators.required],
          descripcion: ['', Validators.required],
          nombre: ['', Validators.required],
          primerApellido: ['', Validators.required],
          segundoApellido: ['', Validators.required]
      });
      if(this.uServ.siguienteEsModificacion) {
          const clearUsr = new Usuario();
          clearUsr.correo = this.uServ.usrOnBufferToModificar.correo;
          clearUsr.descripcion = this.uServ.usrOnBufferToModificar.descripcion;
          clearUsr.segundoApellido = this.uServ.usrOnBufferToModificar.segundoApellido;
          clearUsr.primerApellido = this.uServ.usrOnBufferToModificar.primerApellido;
          clearUsr.nombre = this.uServ.usrOnBufferToModificar.nombre;
          clearUsr.sexo = this.uServ.usrOnBufferToModificar.sexo;
          clearUsr.edad = this.uServ.usrOnBufferToModificar.edad;
          clearUsr.contrasenia = this.uServ.usrOnBufferToModificar.contrasenia;
          this.formulario.setValue(clearUsr);
      }
  }
  async submit() {
      if(this.formulario.valid) {
          this.user = <Usuario>this.formulario.getRawValue();
          const succeed = await this.uServ.alta(this.user);
          console.log(succeed);
          if(succeed) {

              this.alert('Registro exitoso');
              this.uServ.fetchData();
          } else {
              this.alert('Algo salio mal');
              this.uServ.usrOnBufferToModificar = this.user;
              this.uServ.siguienteEsModificacion = true;
          }
          console.log('alta');
      } else {
          this.alert('Todos los campos son obligatorios')
      }
  }
  ngOnInit() {
  }
    alert(m: string) {
        alert({
            title: 'Aviso',
            okButtonText: 'Continuar',
            message: m
        });
    }
}
