import { Component, OnInit } from '@angular/core';
import { DodeljenoPravo } from 'src/app/models/DodeljenoPravo';
import { Korisnik } from 'src/app/models/Korisnik';
import { PravoPristupa } from 'src/app/models/PravoPristupa';
import { DodeljenoPravoService } from 'src/app/services/dodeljeno-pravo.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { PravoPristupaService } from 'src/app/services/pravo-pristupa.service';

@Component({
  selector: 'app-dodeljena-prava',
  templateUrl: './dodeljena-prava.component.html',
  styleUrls: ['./dodeljena-prava.component.scss']
})
export class DodeljenaPravaComponent implements OnInit {

  dodeljenaPrava: DodeljenoPravo[];

  forma: boolean = false;
  

  constructor(private dodeljenaPravoService: DodeljenoPravoService) { }

  ngOnInit(): void {
    this.dobaviDodeljana();
    
  }

  dobaviDodeljana(){
    this.dodeljenaPravoService.getAll().subscribe(response => this.dodeljenaPrava = response);
  }

  prikaziFormu(){
    this.forma = !this.forma;
  }
  dodajDodeljeno(dodeljenoPravo: DodeljenoPravo){
    this.dodeljenaPravoService.save(dodeljenoPravo).subscribe(() => {
      this.dobaviDodeljana();
    })
  }

}
