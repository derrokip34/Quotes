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
        this.quotes.splice(index,1)
  }
  
  addNewQuote(quote) {
    this.quotes.push(quote)
  }

  countUp = 0
  countDown = 0

  upVote(quote){
    quote.countUp = quote.countUp + 1;
  }
  downVote(quote) {
    quote.countDown = quote.countDown + 1;
  }
  
  likedQuote: string;
  likedAuthor: string;
  likedPoster: string;
  highestVotes = 0;

  mostLikedQuote (){
    for(let i=0; i<this.quotes.length; i++) {
      if(this.quotes[i].countUp > this.highestVotes) {
        this.highestVotes = this.quotes[i].countUp;
        this.likedQuote = this.quotes[i].name;
        this.likedAuthor = this.quotes[i].author;
        this.likedPoster = this.quotes[i].poster;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
