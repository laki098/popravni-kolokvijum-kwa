import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PravoPristupa } from 'src/app/models/PravoPristupa';

@Component({
  selector: 'app-pravo-pristupa-add',
  templateUrl: './pravo-pristupa-add.component.html',
  styleUrls: ['./pravo-pristupa-add.component.scss']
})
export class PravoPristupaAddComponent implements OnInit {

  constructor() { }

  @Output() onAdd: EventEmitter<PravoPristupa> = new EventEmitter();

  pravo: PravoPristupa = {
    id: null,
    naziv: ""
  }

  ngOnInit(): void {
  }

  dodaj(){
    this.onAdd.emit(this.pravo);
  }
}
