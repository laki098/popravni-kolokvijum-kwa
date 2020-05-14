import { Component, OnInit } from '@angular/core';
import { PravoPristupaService } from 'src/app/services/pravo-pristupa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PravoPristupa } from 'src/app/models/PravoPristupa';

@Component({
  selector: 'app-pravo-pristupa-update',
  templateUrl: './pravo-pristupa-update.component.html',
  styleUrls: ['./pravo-pristupa-update.component.scss']
})
export class PravoPristupaUpdateComponent implements OnInit {

  constructor(private pravoPristupaService: PravoPristupaService, private route: ActivatedRoute, private router: Router) { }

  pravo: PravoPristupa = {
    id: null,
    naziv: ""
  };

  ngOnInit(): void {
    this.pravoPristupaService.getOne(this.route.snapshot.params["id"]).subscribe(response => this.pravo = response);
  }

  izmeni() {
    this.pravoPristupaService.update(this.pravo).subscribe(() => {
      this.router.navigate(['/pravapristupa', this.pravo.id]);
    })
  }

}
