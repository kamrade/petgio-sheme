import { RouterModule, Routes } from '@angular/router';
import { RadarComponent } from './radar/radar.component';
import { AuthComponent } from './auth/auth.component'

const routes: Routes = [
  { path: '', redirectTo: 'radar', pathMatch: 'full' },
  { path: 'radar', component: RadarComponent },
  { path: 'login', outlet: 'auth', component: AuthComponent },
]

export const routing = RouterModule.forRoot(routes, {useHash: true});
