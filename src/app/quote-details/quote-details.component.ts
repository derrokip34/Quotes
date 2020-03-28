import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean) {
    this.isComplete.emit(complete)
  }

  countUp = 0
  countDown = 0

  upVote(quote){
    quote.countUp = quote.countUp + 1;
  }
  downVote(quote) {
    quote.countDown = quote.countDown + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
