import { Component, OnInit } from '@angular/core';
import { DodeljenoPravo } from 'src/app/models/DodeljenoPravo';
import { DodeljenoPravoService } from 'src/app/services/dodeljeno-pravo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dodeljeno-pravo',
  templateUrl: './dodeljeno-pravo.component.html',
  styleUrls: ['./dodeljeno-pravo.component.scss']
})
export class DodeljenoPravoComponent implements OnInit {

  dodeljenoPravo: DodeljenoPravo = {
    id: null,
    korisnikId: null,
    pravoPristupaId: null,
    datumDodele: null,
    datumOpoziva: null
  }

  constructor(private dodeljenoPravoService: DodeljenoPravoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dobaviPravo();
  }

  dobaviPravo(){
    this.dodeljenoPravoService.getOne(this.route.snapshot.params["id"]).subscribe(response => this.dodeljenoPravo = response);
  }

  navigateToUpdate(){
    this.router.navigate(["/dodeljenaprava", this.dodeljenoPravo.id, 'update']);
  }

}
