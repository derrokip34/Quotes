import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Do or do not there is no try', 'Yoda', 'Derrick', new Date(2020,2,28)),
    new Quote('My only regret is that I have only one life to give to my country', 'Nathan Hale', 'Chandler', new Date(2020,2,18))
  ]

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isComplete, index) {
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if(toDelete) {
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote) {
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
