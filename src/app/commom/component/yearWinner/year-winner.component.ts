import { Component, OnInit, Input } from '@angular/core';
import { YearWinner } from '../../object/YearWinner';
import { ConfigService } from './../../service/generic.service';

@Component({
  selector: 'app-year-winner',
  templateUrl: './year-winner.component.html',
  styleUrls: ['./year-winner.component.css']
})
export class YearWinnerComponent implements OnInit {

  filterYear = '1990';
  yearWinner: YearWinner
  
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getYearWinner();
  }

  checkYearInvalid(year) {
    const pattern = /^\d+$/;
    if (pattern.test(year)) {      
      if (year.length === 4) {              
        return false;                      
      }
    }
    return true;
  }

  getYearWinner() {
    this.configService.getYearWinner(this.filterYear).subscribe(res => {
      this.yearWinner = res;
    });
  }

}