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
  yearInvalid: boolean;
  anoDigitado: string;
  completouAno: boolean;
  winnerDigitado: boolean;
  sizeSelecionado: number;
  filterYear: string;
  filterWinner: boolean;
  filterSize: number;
  errorConsulta: boolean;

  private timeoutValue: any;
  
  constructor(private configService: ConfigService) { }


  ngOnInit() {
    this.completouAno = true;
    this.winnerDigitado = false;
    this.sizeSelecionado = 2;
    let mov = new MovieDate();
    mov.page = 0;
    mov.size = 2;
    mov.winner = false;
    mov.year = '1990';
    this.getMovieDate(mov);
    this.filterYear = '1990';
    this.filterWinner = false;
    this.filterSize = 2;
  }

  verificaUsuarioDigitando() {
    this.yearInvalid = !this.completouAno;
  }

  filtraWinner(winner: boolean) {
    this.winnerDigitado = winner;
    this.busca(0);
  }

  filtraPorAno(ano: string) {
    this.completouAno = true;     
    clearTimeout(this.timeoutValue);
    const pattern = /[0-9]{4}/;
    if (pattern.test(ano)) {
      this.yearInvalid = false;
      if (ano.length === 4) {
        debugger;
        this.anoDigitado = ano;
        this.busca(0);
      } else {        
        this.completouAno = false;
        this.timeoutValue = setTimeout(() => {
          this.verificaUsuarioDigitando();
        }, 1000);
      }          
    } else {
      this.yearInvalid = true;
    }      
  }

  filtraSize(size: number) {
    this.sizeSelecionado = size;    
    this.busca(0);

  }

  anterior() {
    this.busca(this.pageMode.pageSelected - 1);
  }

  proximo() {
    this.busca(this.pageMode.pageSelected + 1);    
  }

  busca(pagina: number) {
    let mov = new MovieDate();
    mov.page = pagina;
    mov.size = this.filterSize;
    mov.winner = this.winnerDigitado;
    mov.year = this.anoDigitado;
    this.getMovieDate(mov);
  }

  getMovieDate(mov: MovieDate) {
    this.configService.getMovieDate(mov).subscribe(res => {
      this.errorConsulta = res.content.length < 1;
      this.responstaTeste = res.content;
      this.pageMode = new PageMode(res.totalPages, res.totalElements, res.last, res.first);
      this.resposta = true;
      this.pageMode.pageSelected = res.number;
    }, () => {
      this.errorConsulta = true;
    });
  }
}
