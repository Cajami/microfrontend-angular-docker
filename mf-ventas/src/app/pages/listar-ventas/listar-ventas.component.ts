import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-ventas',
  imports: [CommonModule],
  templateUrl: './listar-ventas.component.html',
  styleUrl: './listar-ventas.component.scss',
})
export class ListarVentasComponent {
  ventas = [
    {
      producto: 'Laptop HP 14"',
      total: 1450.0,
      cuotas: 12,
      montoCuota: 120.83,
      estado: 'Al día',
      fecha: new Date('2025-06-10'),
      imagenUrl: 'producto1.jpg',
    },
    {
      producto: 'Smartphone Xiaomi',
      total: 899.0,
      cuotas: 6,
      montoCuota: 149.83,
      estado: 'Atrasado',
      fecha: new Date('2025-05-15'),
      imagenUrl: 'producto2.jpg',
    },
    {
      producto: 'Impresora 3D E2CF',
      total: 4899.99,
      cuotas: 10,
      montoCuota: 189.99,
      estado: 'Cancelado',
      fecha: new Date('2025-04-01'),
      imagenUrl: 'producto3.jpg',
    },
    {
      producto: 'PlayStation 5 PS5 Slim Digital',
      total: 2890,
      cuotas: 16,
      montoCuota: 189.99,
      estado: 'Cancelado',
      fecha: new Date('2025-04-01'),
      imagenUrl: 'producto4.jpg',
    },
  ];
}
