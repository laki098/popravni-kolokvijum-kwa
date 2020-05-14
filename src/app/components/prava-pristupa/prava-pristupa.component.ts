import { Component, OnInit } from '@angular/core';
import { PravoPristupa } from 'src/app/models/PravoPristupa';
import { PravoPristupaService } from 'src/app/services/pravo-pristupa.service';

@Component({
  selector: 'app-prava-pristupa',
  templateUrl: './prava-pristupa.component.html',
  styleUrls: ['./prava-pristupa.component.scss']
})
export class PravaPristupaComponent implements OnInit {

  pravaPristupa: PravoPristupa[];

  forma: boolean = false;

  prikaziFormu(){
    this.forma = !this.forma;
  }

  constructor(private pravoPristupaService: PravoPristupaService) { }

  dobaviPrava(){
    this.pravoPristupaService.getAll().subscribe(response => this.pravaPristupa = response);
  }
  obrisiPravoPristupa(id:number){
    this.pravoPristupaService.delete(id).subscribe(() => {
      this.dobaviPrava();
    })
  }
  dodajPravoPristupa(pravo: PravoPristupa){
    this.pravoPristupaService.save(pravo).subscribe(response => {
      this.dobaviPrava();
    })
  }

  ngOnInit(): void {
    this.dobaviPrava()
  }

}
