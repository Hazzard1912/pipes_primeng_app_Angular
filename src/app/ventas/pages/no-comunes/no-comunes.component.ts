import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Jhonnier';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Marta', 'Isabel'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona(): void {
    this.nombre = 'Isabel';
    this.genero = 'femenino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Jhonnier',
    edad: 18,
    direccion: 'Cali, Colombia',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Batman',
      vuela: true,
    },
    {
      nombre: 'Spiderman',
      vuela: true,
    },
    {
      nombre: 'Wonder Woman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(2000).pipe(tap(() => console.log('interval')));

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 2000);
  });
}
