import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../../commom/service/generic.service';
import { MovieDate } from './../../commom/params/movieDate';

@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  responstaTeste: any;
  resposta = false;
  
  constructor(private configService: ConfigService) { }


  ngOnInit() {
    let mov = new MovieDate();
    mov.page = '0';
    mov.size = '10';
    mov.winner = 'false';
    mov.year = '1990';
    this.configService.getMovieDate(mov).subscribe(res => {
      console.log(res);
      this.responstaTeste = res.content;
      this.resposta = true;
    });
  }

  busca() {
    
  }
}
