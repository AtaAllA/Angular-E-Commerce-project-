import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  counter = 0;

  constructor(private counterServices : CounterService){}



  ngOnInit(): void {

    this.counterServices.counterVal.subscribe((res) => this.counter=res)
    
  }

  increaseCounter(){
    this.counterServices.updateCounter(++this.counter)
  }

  decreaseCounter(){
    this.counterServices.updateCounter(--this.counter)
  }
}
