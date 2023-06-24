import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PanelService } from '../panel.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-videolearn',
  templateUrl: './videolearn.component.html',
  styleUrls: ['./videolearn.component.css']
})
export class VideolearnComponent implements OnDestroy {
  tabs: any[] = [];
  selectedTab = 0;
  bookDetails: any;
  centered = false;
  disabled = false;
  unbounded = false;
  color: string="";
  radius: number = 0;
  cardSelected:any;
  selectedState:any;
  activeLink:any
  bookDisplayData:any

  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
  constructor(private http:HttpClient,private panel:PanelService){}

  ngOnInit(): void {
    // this.http.get<any[]>('http://localhost:3000/data').subscribe({
    //    next:(response:any)=>{
    //      this.tabs = response;
    //      this.panel.cardData.next({})
    //    }
    // })

    this.panel.getBookInfo().subscribe({
        next:(response=>{
             console.log(response)
             this.bookDetails = response
        }),
        error:(reject=>{
               console.log(reject)
        })
    })

  }

  cardSelection(selection:string){

    this.panel.cardData.next(selection)
    this.panel.DocSelection.next('')
  }

  callTabChange(){
      // console.log('inside ')
      this.panel.cardData.next({})
      this.panel.DocSelection.next('')
  }

  fetchBookInfo(schoolName:any){
    this.activeLink = schoolName.name
    this.bookDisplayData = schoolName
}
  ngOnDestroy(): void {
    this.panel.cardData.next({})
  }
}
