import { Routes } from '@angular/router';
import { ListarComprasComponent } from './pages/listar-compras/listar-compras.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-compras', pathMatch: 'full' },
  { path: 'listar-compras', component: ListarComprasComponent },
];
