import { Routes } from '@angular/router';
import { ListarVentasComponent } from './pages/listar-ventas/listar-ventas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-ventas', pathMatch: 'full' },
  { path: 'listar-ventas', component: ListarVentasComponent },
];
