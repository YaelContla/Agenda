import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { NgForm } from '@angular/forms';
import { DatosModel } from '../../models/datos.model';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dato = new DatosModel();

  constructor( private agendaService: AgendaService ) { }

  ngOnInit() {
  }

  guardar( form: NgForm ){

    if ( form.invalid ) {
      console.log('Formulario No Válido')
      return;

      
    } 

    this.agendaService.crearAgenda(this.dato)
          .subscribe( resp => {
            console.log(resp);
          });
        }

        reloadPage() { 
          window.location.reload(); 
      } 
}
