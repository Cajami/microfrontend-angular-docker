import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ruta por defecto
  {
    path: 'ventas',
    loadComponent: () =>
      loadRemoteModule('mf-ventas', './ListarVentas').then(
        (m) => m.ListarVentasComponent
      ),
  },
  {
    path: 'compras',
    loadComponent: () =>
      loadRemoteModule('mf-compras', './ListarCompras').then(
        (m) => m.ListarComprasComponent
      ),
  },
];
