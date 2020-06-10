import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { DatosModel } from '../models/datos.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {


  private url ='https://chatbotdf-ee2ba.firebaseio.com';

  constructor( private http: HttpClient ) { 
    console.log('Servicio Agenda Ready!!');
  }

  crearAgenda (dato: DatosModel) {

    return this.http.post(`${ this.url }/registros.json`, dato)
            .pipe(
                map( (resp: any) => {
                    dato.idPersona = resp.name;
                    return dato;
                }));

  }

  getAgenda (){
    return this.http.get(`${this.url}/registros.json`)
          .pipe(
                map( this.crearArreglo )
                );
  }

  private crearArreglo(datosObj: object){

    const datos: DatosModel [] = [];

    console.log(datosObj);

    Object.keys( datosObj ).forEach( key => {

      const dato: DatosModel = datosObj[key];
      dato.idPersona = key;

      datos.push( dato );

    });

    return datos;

  }

}
