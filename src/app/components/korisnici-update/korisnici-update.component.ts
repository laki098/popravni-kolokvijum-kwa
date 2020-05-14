import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/Korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-korisnici-update',
  templateUrl: './korisnici-update.component.html',
  styleUrls: ['./korisnici-update.component.scss']
})
export class KorisniciUpdateComponent implements OnInit {

  korisnik: Korisnik = {
    id: null,
    korisnickoIme: "",
    email: "",
    lozinka: ""
  }

  constructor(private korisnikService: KorisnikService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dobaviKorisnika();
  }
  dobaviKorisnika() {
    this.korisnikService.getOne(this.route.snapshot.params["id"]).subscribe(response => this.korisnik = response);
  }

  izmeni(){
    this.korisnikService.update(this.korisnik.id, this.korisnik).subscribe(response => {
      this.router.navigate(['/korisnici', this.korisnik.id]);
    })
  }

}
