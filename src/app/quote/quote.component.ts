
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Kobe Bryant', "“Everyone has talent, the difference is hunger,how much do you want it.", new Date(2021, 1, 25)),
    new Quote(2, 'Solomon ', "“I am the greatest me their will ever be”", new Date(2021, 1, 12)),
    new Quote(2, 'Sonko', "“Power comes and goes, but the people shall remain”", new Date(2021, 1, 12)),
  ];


  like(index) {
    this.quotes[index].like++;
  }

  unlike(index) {
    this.quotes[index].unlike++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Thank you for viewing this Quote.Do you want to delete it. ${this.quotes[index].user}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}