import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../../commom/service/generic.service';
import { MovieDate } from './../../commom/params/movieDate';
import { PageMode } from './../../commom/object/pageMode';

@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  responstaTeste: any;
  resposta = false;
  pageMode: PageMode;
  
  constructor(private configService: ConfigService) { }


  ngOnInit() {
    let mov = new MovieDate();
    mov.page = 0;
    mov.size = 2;
    mov.winner = false;
    mov.year = '2007';
    this.getMovieDate(mov);
  }

  anterior() {
    let mov = new MovieDate();
    mov.page = this.pageMode.pageSelected - 1;
    mov.size = 2;
    mov.winner = false;
    mov.year = '2007';
    this.getMovieDate(mov);    
  }

  proximo() {
    let mov = new MovieDate();
    mov.page = this.pageMode.pageSelected + 1;
    mov.size = 2;
    mov.winner = false;
    mov.year = '2007';
    this.getMovieDate(mov);
  }

  busca(pagina: number) {
    let mov = new MovieDate();
    mov.page = pagina;
    mov.size = 2;
    mov.winner = false;
    mov.year = '2007';
    this.getMovieDate(mov);
  }

  getMovieDate(mov: MovieDate) {
    this.configService.getMovieDate(mov).subscribe(res => {
      console.log(res);
      this.responstaTeste = res.content;
      this.pageMode = new PageMode(res.totalPages, res.totalElements, res.last, res.first);
      this.resposta = true;
      this.pageMode.pageSelected = res.number;
    });
  }
}
