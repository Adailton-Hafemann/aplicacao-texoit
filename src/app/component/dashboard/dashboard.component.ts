import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from './../../commom/service/generic.service';
import { MovieDate } from './../../commom/params/movieDate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public folder: string;  

  constructor(private activatedRoute: ActivatedRoute, private configService: ConfigService) { }

  busca() {
    let mov = new MovieDate();
    mov.page = 0;
    mov.size = 10;
    mov.winner = false;
    mov.year = '1990';
    this.configService.getMovieDate(mov).subscribe(res => {
      console.log(res);
    });
  }

}
