import { Component, OnInit, Input } from '@angular/core';
import { Studio } from '../../object/Studio';
import { ConfigService } from '../../service/generic.service';

@Component({
  selector: 'app-studio-winner',
  templateUrl: './studio-winner.component.html',
  styleUrls: ['./studio-winner.component.css']
})
export class StudiosWinnerComponent implements OnInit {
  
  constructor(private configService: ConfigService) { }

  newStudioList: Array<Studio>;
  studios: Array<Studio>;
  maxLine = 3;
  minLine = 0;
  limitLine = 3;
  page = 1;

  ngOnInit() {
    this.getStudiosWinner();
  }

  getStudiosWinner() {
    this.configService.getStudiosWinner().subscribe(res => {
        this.studios = res.studios;
        this.limitLine = this.studios.length / 3;
        this.refreshStudioList();
    });
  }

  refreshStudioList() {
    this.newStudioList = new Array<Studio>();
    for (let i = 0; i < this.studios.length; i++) {
      if (i >= this.minLine && i <= this.maxLine) {
        this.newStudioList.push(this.studios[i]);
      }
    }
  }

  previous() {    
    this.maxLine = this.minLine;
    this.minLine = this.minLine - 3;
    this.page--;   
    this.refreshStudioList();
  }

  next() {
    this.minLine = this.maxLine;
    this.maxLine = this.maxLine + 3;    
    this.page++;
    this.refreshStudioList();
  }

}