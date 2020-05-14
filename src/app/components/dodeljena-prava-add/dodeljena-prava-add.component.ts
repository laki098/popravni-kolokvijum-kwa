import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DodeljenoPravo } from 'src/app/models/DodeljenoPravo';
import { Korisnik } from 'src/app/models/Korisnik';
import { PravoPristupa } from 'src/app/models/PravoPristupa';
import { DodeljenoPravoService } from 'src/app/services/dodeljeno-pravo.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { PravoPristupaService } from 'src/app/services/pravo-pristupa.service';

@Component({
  selector: 'app-dodeljena-prava-add',
  templateUrl: './dodeljena-prava-add.component.html',
  styleUrls: ['./dodeljena-prava-add.component.scss']
})
export class DodeljenaPravaAddComponent implements OnInit {

  @Output() onAdd: EventEmitter<DodeljenoPravo> = new EventEmitter();

  dodeljenoPravo: DodeljenoPravo = {
    id: null,
    korisnikId: null,
    pravoPristupaId: null,
    datumDodele: null,
    datumOpoziva: null
  }
  korisnici: Korisnik[];
  pravaPristupa: PravoPristupa[];
  izabraniKorisnik: number;
  izabranoPravo: number;

  constructor(private dodeljenaPravoService: DodeljenoPravoService, private korisniciService: KorisnikService, private pravoPristupaService: PravoPristupaService) { }

  ngOnInit(): void {
    this.dobaviKorisnike();
    this.dobaviPravaPristupa();
  }

  
  dobaviKorisnike(){
    this.korisniciService.getAll().subscribe(response => this.korisnici = response);
  }
  dobaviPravaPristupa(){
    this.pravoPristupaService.getAll().subscribe(response => this.pravaPristupa = response);
  }

  dodaj(){
    this.dodeljenoPravo.korisnikId = this.izabraniKorisnik;
    this.dodeljenoPravo.pravoPristupaId = this.izabranoPravo;
    this.onAdd.emit(this.dodeljenoPravo);
  }
}
