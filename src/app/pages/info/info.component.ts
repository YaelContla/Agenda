import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { DatosModel } from '../../models/datos.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  datos: DatosModel[] = [];

  constructor( private agendaService: AgendaService) { }

  ngOnInit() { 
  
    this.agendaService.getAgenda()
        .subscribe( resp => this.datos = resp );

  }

}
