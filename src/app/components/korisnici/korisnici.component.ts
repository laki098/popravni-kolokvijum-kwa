import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/Korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.scss']
})
export class KorisniciComponent implements OnInit {

  constructor(private korisnikService: KorisnikService) { }

  korisnici: Korisnik[];

  forma: boolean = false;

  ngOnInit(): void {
    this.getKorisnici();
  }

  getKorisnici(){
    this.korisnikService.getAll().subscribe(response => this.korisnici = response);
  }
  obrisiKorisnika(id: number){
    this.korisnikService.delete(id).subscribe(() => {
      this.getKorisnici();
    })
  }

  prikaziFormu() {
    this.forma = !this.forma;
  }
  dodajKorisnika(korisnik: Korisnik) {
    this.korisnikService.save(korisnik).subscribe(() => {
      this.getKorisnici();
    })
  }

}
