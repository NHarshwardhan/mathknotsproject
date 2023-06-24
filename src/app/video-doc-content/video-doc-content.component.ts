import { Component, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PanelService } from '../panel.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogVideoContentComponent } from './../dialog-video-content/dialog-video-content.component';

@Component({
  selector: 'app-video-doc-content',
  templateUrl: './video-doc-content.component.html',
  styleUrls: ['./video-doc-content.component.css']
})
export class VideoDocContentComponent implements OnInit{

   docSelection: any | undefined = {};
   movieUrl:any | undefined = []
   play:string = "Play";
   videodisabled:boolean = true;
   innerWidth = 0
   videoIcon:string = "./assets/images/play.png";
   selectedMenu: string=''
   constructor(public dialog: MatDialog,private panel:PanelService,public domSanitizer:DomSanitizer){}
   videoUrl: string = ''

   photoURL(video: any){
    console.log(video)
      return this.domSanitizer.bypassSecurityTrustResourceUrl(video)
   }


   ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.panel.DocSelection.subscribe({
      next:(doc:any)=>{
         this.selectedMenu = doc.key
         this.docSelection = doc.material
        //  doc.material.map((d:any,index:number)=>{
        //        let videoid = d.video[index].src
        //        this.movieUrl.push(this.domSanitizer.bypassSecurityTrustResourceUrl(videoid))
        //  })
      }
    })


   }
   changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "./assets/images/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "./assets/images/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }

  playYoutubeVideo(vid: any,btnInfo:any){

    console.log(vid)
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    let relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    if (this.innerWidth > 1500) {
      relativeWidth = (1500 * 70 ) / 100;
    } else {
      relativeWidth = (this.innerWidth * 50 ) / 100;
    }

    const relativeHeight = (relativeWidth * 9) / 16 + 120; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';

    dialogConfig.data = {
        bookmark: vid,
        btnInfo : btnInfo
    };

    const dialogRef = this.dialog.open(DialogVideoContentComponent, dialogConfig);


  }

  viewBook(pdfbook:any){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    let relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    if (this.innerWidth > 1500) {
      relativeWidth = (1500 * 70 ) / 100;
    } else {
      relativeWidth = (this.innerWidth * 50 ) / 100;
    }

    const relativeHeight = (relativeWidth * 9) / 16 + 120; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';

    dialogConfig.data = {
        bookmark: pdfbook,
        btnInfo : 'read'

    };

    const dialogRef = this.dialog.open(DialogVideoContentComponent, dialogConfig);
  }


}
