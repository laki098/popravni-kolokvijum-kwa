import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { KorisniciUpdateComponent } from './components/korisnici-update/korisnici-update.component';
import { PravaPristupaComponent } from './components/prava-pristupa/prava-pristupa.component';
import { PravoPristupaComponent } from './components/pravo-pristupa/pravo-pristupa.component';
import { PravoPristupaUpdateComponent } from './components/pravo-pristupa-update/pravo-pristupa-update.component';
import { DodeljenaPravaComponent } from './components/dodeljena-prava/dodeljena-prava.component';
import { DodeljenoPravoComponent } from './components/dodeljeno-pravo/dodeljeno-pravo.component';
import { DodeljenoPravoUpdateComponent } from './components/dodeljeno-pravo-update/dodeljeno-pravo-update.component';


const routes: Routes = [
  {
    path: "",
    component: KorisniciComponent
  },
  {
    path: "korisnici/:id",
    component: KorisnikComponent
  },
  {
    path: "korisnici/:id/update",
    component: KorisniciUpdateComponent
  },
  {
    path: 'pravapristupa',
    component: PravaPristupaComponent
  },
  {
    path: 'pravapristupa/:id',
    component: PravoPristupaComponent
  },
  {
    path: 'pravapristupa/:id/update',
    component: PravoPristupaUpdateComponent
  },
  {
    path: 'dodeljenaprava',
    component: DodeljenaPravaComponent
  },
  {
    path: 'dodeljenaprava/:id',
    component: DodeljenoPravoComponent
  },
  {
    path: 'dodeljenaprava/:id/update',
    component: DodeljenoPravoUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
