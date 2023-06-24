import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent {
  selectedTab = 0;

  @Input() bookdata: any


  openAmazon(amazonUrl?: string){

     window.open(amazonUrl,'_blank')

  }

}
