import { Component, OnInit, Input } from '@angular/core';
import { Producer } from '../../object/Producer';
import { ConfigService } from './../../service/generic.service';

@Component({
  selector: 'app-producer-winner',
  templateUrl: './producer-winner.component.html',
  styleUrls: ['./producer-winner.component.css']
})
export class ProducerWinnerComponent implements OnInit {
  
  constructor(private configService: ConfigService) { }  
  
  produtorMax: Array<Producer>
  produtorMin: Array<Producer>

  ngOnInit() {
    this.getMovieDate();
  }

  getMovieDate() {
    this.configService.getProductList().subscribe(res => {
        this.produtorMax = res.max;
        this.produtorMin = res.min;        
    });
  }

}