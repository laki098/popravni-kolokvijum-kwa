import { Component, OnInit } from '@angular/core';
import { DodeljenoPravo } from 'src/app/models/DodeljenoPravo';
import { Korisnik } from 'src/app/models/Korisnik';
import { PravoPristupa } from 'src/app/models/PravoPristupa';
import { DodeljenoPravoService } from 'src/app/services/dodeljeno-pravo.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { PravoPristupaService } from 'src/app/services/pravo-pristupa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dodeljeno-pravo-update',
  templateUrl: './dodeljeno-pravo-update.component.html',
  styleUrls: ['./dodeljeno-pravo-update.component.scss']
})
export class DodeljenoPravoUpdateComponent implements OnInit {

  dodeljenoPravo: DodeljenoPravo = {
    id: null,
    korisnikId: null,
    pravoPristupaId: null,
    datumDodele: null,
    datumOpoziva: null
  };

  korisnici: Korisnik[];
  pravaPristupa: PravoPristupa[];

  izabraniKorisnik: number = null;
  izabranoPravo: number = null;

  constructor(private router: Router,private route: ActivatedRoute ,private dodeljenoPravoService: DodeljenoPravoService, private korisnikService: KorisnikService, private pravaPristupaService: PravoPristupaService) { }

  ngOnInit(): void {
    this.dobaviDodeljeno();
    this.dobaviKorisnike();
    this.dobaviPravaPristupa();
  }

  dobaviDodeljeno(){
    this.dodeljenoPravoService.getOne(this.route.snapshot.params["id"]).subscribe(response => this.dodeljenoPravo = response);
  }
  dobaviKorisnike(){
    this.korisnikService.getAll().subscribe(response => this.korisnici = response);
  }
  dobaviPravaPristupa(){
    this.pravaPristupaService.getAll().subscribe(response => this.pravaPristupa = response);
  }

  izmeni(){
    this.dodeljenoPravo.korisnikId = this.izabraniKorisnik;
    this.dodeljenoPravo.pravoPristupaId = this.izabranoPravo;
    this.dodeljenoPravoService.update(this.dodeljenoPravo).subscribe(() => {
      this.router.navigate(["/dodeljenaprava", this.dodeljenoPravo.id]);
    })
  }

}
