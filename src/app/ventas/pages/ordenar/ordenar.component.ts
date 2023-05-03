import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  mayusculas: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Spiderman',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
  ];

  cambiarValor(): void {
    this.mayusculas = !this.mayusculas;
  }

  cambiarOrden( valor: string ): void {
    this.ordenarPor = valor;
  }
}
