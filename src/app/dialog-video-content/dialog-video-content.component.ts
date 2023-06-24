import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-video-content',
  templateUrl: './dialog-video-content.component.html',
  styleUrls: ['./dialog-video-content.component.css']
})
export class DialogVideoContentComponent {
  video: any;
  safeUrl: any;
  btnInfo: any
  pdfData:any

  constructor(
    private dialogRef: MatDialogRef<DialogVideoContentComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,private _sanitizer: DomSanitizer
  ) {

    this.btnInfo = data.btnInfo

    if(this.btnInfo =='demo'){
       this.video = data.bookmark;
       setTimeout(()=>{
          this.close()
      },10000)
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video}?&modestbranding=1&controls=1&showInfo=0`);

    }
    else if(this.btnInfo=='read'){
      let pdf = data.bookmark;
      console.log(pdf)
      this.pdfData = pdf


      //  this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video}?&modestbranding=1&controls=1&showInfo=0`);

    }


  }

  ngOnInit() {

  }

  close() {
    this.dialogRef.close('Play Youtube Video Closed');
  }


  disableRightclick(event:any) {
    console.log(event)
    event.preventDefault();
    // return false
    /* INSERT CODE HERE */
  }

}
