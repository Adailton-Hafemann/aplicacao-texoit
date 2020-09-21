import { Component, OnInit, Input } from '@angular/core';
import { Year } from '../../object/Year';
import { ConfigService } from './../../service/generic.service';

@Component({
  selector: 'app-year-with-multiple-winner',
  templateUrl: './year-with-multiple-winner.component.html',
  styleUrls: ['./year-with-multiple-winner.component.css']
})
export class YearWithMultipleWinnerComponent implements OnInit {
  
  constructor(private configService: ConfigService) { }

  yearList: Array<Year>;

  ngOnInit() {
    this.getYearWithMultipleWinner();
  }

  getYearWithMultipleWinner() {
    this.configService.getYearWithMultipleWinner().subscribe(res => {
        this.yearList = res.years;
    });
  }

}