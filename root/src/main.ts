import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

initFederation(environment['federation-manifest'])
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
