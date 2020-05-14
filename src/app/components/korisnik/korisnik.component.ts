import { Component, OnInit } from '@angular/core';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from 'src/app/models/Korisnik';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.scss']
})
export class KorisnikComponent implements OnInit {

  korisnik: Korisnik = {
    id: null,
    korisnickoIme: "",
    email: "",
    lozinka: ""
  };

  constructor(private korisnikService: KorisnikService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.korisnikService.getOne(this.route.snapshot.params["id"]).subscribe(response => this.korisnik = response);
  }

  navigateToUpdate(){
    this.router.navigate(['korisnici', this.korisnik.id, 'update']);
  }

}
