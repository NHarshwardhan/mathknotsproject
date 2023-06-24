import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { PanelService } from '../panel.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],

})
export class BookComponent implements OnInit {

  tabs: any[] = [];
  selectedTab = 0;
  selectedState:any;
  bookDetails: any;
  activeLink:any
  bookDisplayData:any


  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  constructor(private bookService:PanelService){}

  ngOnInit(): void {
    // this.http.get<any[]>('./assets/data/book.json').subscribe({
    //    next:(response:any)=>{
    //      console.log(response)
    //      this.tabs = response;
    //    }
    // })

    this.bookService.getBookInfo().subscribe({
        next:(response=>{
             console.log(response)
             this.bookDetails = response
        }),
        error:(reject=>{
               console.log(reject)
        })
    })
  }


  fetchBookInfo(schoolName:any){
       this.activeLink = schoolName.name
       this.bookDisplayData = schoolName
  }

}
