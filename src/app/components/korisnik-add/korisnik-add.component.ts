import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Korisnik } from 'src/app/models/Korisnik';
import { on } from 'cluster';
import { timingSafeEqual } from 'crypto';



@Component({
  selector: 'app-korisnik-add',
  templateUrl: './korisnik-add.component.html',
  styleUrls: ['./korisnik-add.component.scss']
})
export class KorisnikAddComponent implements OnInit {

  constructor() { }

  @Output() onAdd: EventEmitter<Korisnik> = new EventEmitter();

  korisnik: Korisnik = {
    id: null,
    korisnickoIme: "",
    email: "",
    lozinka: ""
  }

  ngOnInit(): void {
  }

  proslediKorisnika(){
    this.onAdd.emit(this.korisnik);
  }

}
