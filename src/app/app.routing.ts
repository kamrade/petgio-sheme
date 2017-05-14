import { RouterModule, Routes } from '@angular/router';
import { RadarComponent } from './radar/radar.component';
import { AuthComponent } from './auth/auth.component'
import { AddPetComponent } from './add-pet/add-pet.component'

const routes: Routes = [
  { path: '', redirectTo: 'radar', pathMatch: 'full' },
  { path: 'radar', component: RadarComponent },
  { path: 'login', outlet: 'auth', component: AuthComponent },
  { path: 'addpet', outlet: 'addPet', component: AddPetComponent },
]

export const routing = RouterModule.forRoot(routes, {useHash: true});
