import { Component, OnInit } from '@angular/core';
import { PravoPristupa } from 'src/app/models/PravoPristupa';
import { PravoPristupaService } from 'src/app/services/pravo-pristupa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pravo-pristupa',
  templateUrl: './pravo-pristupa.component.html',
  styleUrls: ['./pravo-pristupa.component.scss']
})
export class PravoPristupaComponent implements OnInit {

  pravo: PravoPristupa = {
    id: null,
    naziv: ""
  };

  constructor(private pravoPristupaService: PravoPristupaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pravoPristupaService.getOne(this.route.snapshot.params["id"]).subscribe(response => this.pravo = response);
  }

  navigateToUpdate() {
    this.router.navigate(["/pravapristupa", this.pravo.id, 'update'])
  }

}
