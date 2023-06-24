import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-admin-video-learning',
  templateUrl: './admin-video-learning.component.html',
  styleUrls: ['./admin-video-learning.component.css']
})
export class AdminVideoLearningComponent implements OnInit {

  bookDetails: any;
  selectedOption: string=''
  options = [
    { name:'Add Content',hint:'Integer | Divide | Multiplication'},
    { name:'Add Chapter',hint:'Add Book Chapter | Chapter Unit'},
    { name:'Add Material',hint:'Add Practice | Questions | Video Leactures'},
  ]

  constructor(private bookService:PanelService){}

  ngOnInit(): void {
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



}
