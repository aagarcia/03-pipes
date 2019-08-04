import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(nombre: string, activar: boolean = true ): string {

    let contrasenia: string = '';

    if (activar) {
      for (let i=0; i < nombre.length; i++) {
        contrasenia = contrasenia + '*';
      }
    } else {
      contrasenia = nombre;
    }

    return contrasenia;
  }

}
