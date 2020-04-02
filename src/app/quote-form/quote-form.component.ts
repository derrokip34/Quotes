import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote: any;
  name: string;
  author: string;
  poster: string;
  datePosted: Date;
  
  submitQuote() {
    this.newQuote = new Quote(this.name, this.author, this.poster, new Date());
    this.name = '';
    this.author = '';
    this.poster = '';
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
