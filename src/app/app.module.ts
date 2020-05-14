import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { KorisnikAddComponent } from './components/korisnik-add/korisnik-add.component';
import { KorisniciUpdateComponent } from './components/korisnici-update/korisnici-update.component';
import { PravaPristupaComponent } from './components/prava-pristupa/prava-pristupa.component';
import { PravoPristupaAddComponent } from './components/pravo-pristupa-add/pravo-pristupa-add.component';
import { PravoPristupaComponent } from './components/pravo-pristupa/pravo-pristupa.component';
import { PravoPristupaUpdateComponent } from './components/pravo-pristupa-update/pravo-pristupa-update.component';
import { DodeljenaPravaComponent } from './components/dodeljena-prava/dodeljena-prava.component';
import { DodeljenaPravaAddComponent } from './components/dodeljena-prava-add/dodeljena-prava-add.component';
import { DodeljenoPravoComponent } from './components/dodeljeno-pravo/dodeljeno-pravo.component';
import { DodeljenoPravoUpdateComponent } from './components/dodeljeno-pravo-update/dodeljeno-pravo-update.component'

@NgModule({
  declarations: [
    AppComponent,
    KorisniciComponent,
    KorisnikComponent,
    KorisnikAddComponent,
    KorisniciUpdateComponent,
    PravaPristupaComponent,
    PravoPristupaAddComponent,
    PravoPristupaComponent,
    PravoPristupaUpdateComponent,
    DodeljenaPravaComponent,
    DodeljenaPravaAddComponent,
    DodeljenoPravoComponent,
    DodeljenoPravoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
