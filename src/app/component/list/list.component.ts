import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../../commom/service/generic.service';
import { MovieParams } from './../../commom/params/MovieParams';
import { PageMode } from './../../commom/object/pageMode';
import { MovieDate } from 'src/app/commom/object/MovieDate';
import { YearWinner } from 'src/app/commom/object/YearWinner';

@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pageMode: PageMode;
  yearInvalid: boolean;
  completedYear: boolean;
  winnerDigitado: boolean;  
  filterYear: string;
  filterWinner: boolean;
  filterSize: number;  
  movieDate: Array<YearWinner>;
  noResultFound: boolean;  

  private timeoutValue: any;
  
  constructor(private configService: ConfigService) { }


  /**
   * Inicia o component.
   */
  ngOnInit() {
    this.completedYear = true;
    this.winnerDigitado = false;    
    let mov = new MovieParams();
    mov.page = 0;
    mov.size = 2;
    mov.winner = false;
    mov.year = '1990';
    this.getMovieDate(mov);
    this.filterYear = '1990';
    this.filterWinner = false;
    this.filterSize = 2;
  }
  
  /**
   * Verifica se o usuário acabou de informar o ano.
   */
  checkuserByTyping() {
    this.yearInvalid = !this.completedYear;
  }

  /**
   * Filtra por vencedor ou perdedor.
   * @param winner - true se é vencedor.
   */
  filterByWinner(winner: boolean) {
    this.winnerDigitado = winner;
    this.getMovie(0);
  }

  /**
   * Verifica se o ano informado é valido.
   * @param year Ano informado.
   */
  checkYearValid(year) {
    this.completedYear = true;     
    clearTimeout(this.timeoutValue);
    const pattern = /^\d+$/;
    if (pattern.test(year)) {
      this.yearInvalid = false;
      if (year.length === 4) {        
        this.filterYear = year;
        return true;
      } else {        
        this.completedYear = false;
        this.timeoutValue = setTimeout(() => {
          this.checkuserByTyping();
        }, 1000);
      }          
    } else {
      this.yearInvalid = true;
      return false;
    } 
  }
  
  /**
   * Filtra por ano.
   * @param year ano informado;
   */
  filterByYear(year: string) {
    if (this.checkYearValid(year)) {
      this.getMovie(0);
    }    
  }

  /**
   * Aumenta o limite da busca.
   */
  filterBySize() {    
    this.getMovie(0);

  }

  /**
   * Retorna uma pagina da busca.
   */
  previous() {
    this.getMovie(this.pageMode.pageSelected - 1);
  }

  /**
   * Avança uma pagina da busca;
   */
  next() {
    this.getMovie(this.pageMode.pageSelected + 1);    
  }

  /**
   * Monta as informações para realizar a busca.
   * @param page pagina da consulta.
   */
  getMovie(page: number) {
    let mov = new MovieParams();
    mov.page = page;
    mov.size = this.filterSize;
    mov.winner = this.winnerDigitado;
    mov.year = this.filterYear;
    this.getMovieDate(mov);
  }

  /**
   * Realiza a consulta no serviço.   
   * @param mov Informações para realizar a consulta.
   */
  getMovieDate(mov: MovieParams) {
    this.configService.getMovieDate(mov).subscribe(res => {      
      this.noResultFound = res.content.length < 1;
      this.movieDate = res.content;
      this.pageMode = new PageMode(res.totalPages, res.totalElements, res.last, res.first);      
      this.pageMode.pageSelected = res.pageable.pageNumber;
    }, () => {
      this.noResultFound = true;
    });
  }
}
