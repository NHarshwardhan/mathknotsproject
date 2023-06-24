import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookDetails:any

  selectedBook = {
        state:'',
        schoolName:'',
        gradeInfo:'',
        books:{
           book:'',
           subtitle:'',
           bookImageUrl:'',
           bookBuyLink:'',
           details:'Description',
           describe:''
        },


  }

  constructor(private bookService:PanelService){}

  ngOnInit(): void {

     this.bookService.getBookInfo().subscribe({

       next:(response=>{
          this.bookDetails = response
       }),
       error:(reject=>{
            console.log(reject)
       })
     })

  }

  saveBookDetails(){
    let gradeInfo = [{books:[{...this.selectedBook.books}],name:this.selectedBook.gradeInfo,videoSection:[]}]
    let schools = [{name:this.selectedBook.schoolName,gradeInfo:gradeInfo}]
    let finalBooksDetails = {state:this.selectedBook.state,schools:schools}


    // State if Exist
    const foundRecord = this.bookDetails && this.bookDetails.find((bd:any)=>bd.state===this.selectedBook.state)

    if( foundRecord !=null && Object.keys(foundRecord).length !==0){
       //Update

       //school Exist

       let schoolFound = foundRecord.schools.find((sn:any)=>sn.name===this.selectedBook.schoolName)

       if(schoolFound !==undefined){
         // checking Grade Exist

          let gradeFound= schoolFound.gradeInfo.find((grade:any)=>grade.name===this.selectedBook.gradeInfo)
          if(gradeFound){
              //Update Grade Info

                if(gradeFound.books !== undefined){
                    //updating in exising books properties
                    gradeFound.books = [...gradeFound.books,this.selectedBook.books]

                }
                else{
                     //creating new books properties
                     gradeFound.books=[this.selectedBook.books]

                }

                this.bookService.updateGrade(foundRecord).subscribe({
                    next:(response=>{
                             alert(`Book Details Updated for ${gradeFound.name}`)
                             this.selectedBook = {
                                        state:'',
                                        schoolName:'',
                                        gradeInfo:'',
                                        books:{
                                           book:'',
                                           subtitle:'',
                                           bookImageUrl:'',
                                           details:'Description',
                                           describe:'',
                                           bookBuyLink:''
                                        },
                                      }

                    }),
                    error:(reject=>{
                        console.log(reject)
                    })
                })
          }
          else{
              //Add New Grade
              schoolFound.gradeInfo = [...schoolFound.gradeInfo,{name:this.selectedBook.gradeInfo,books:[this.selectedBook.books]}]
              this.bookService.updateGrade(foundRecord).subscribe({
                next:(response=>{
                         alert(`Book Details Added for ${this.selectedBook.gradeInfo}`)
                         this.selectedBook = {
                                    state:'',
                                    schoolName:'',
                                    gradeInfo:'',
                                    books:{
                                       book:'',
                                       subtitle:'',
                                       bookImageUrl:'',
                                       details:'Description',
                                       describe:'',
                                       bookBuyLink:''
                                    },
                                  }

                }),
                error:(reject=>{
                    console.log(reject)
                })
              })
          }

       }
       else{
         //School Not Exist
         foundRecord.schools=[...foundRecord.schools,{name:this.selectedBook.schoolName,gradeInfo:[{name:this.selectedBook.gradeInfo,books:[this.selectedBook.books]}]}]
         this.bookService.updateGrade(foundRecord).subscribe({
                next:(response=>{
                         alert(`School Infomation Added for ${foundRecord.state}`)
                         this.selectedBook = {
                                    state:'',
                                    schoolName:'',
                                    gradeInfo:'',
                                    books:{
                                       book:'',
                                       subtitle:'',
                                       bookImageUrl:'',
                                       details:'Description',
                                       describe:'',
                                       bookBuyLink:''

                                    },
                                  }

                }),
                error:(reject=>{
                    console.log(reject)
                })
              })
       }


    }
    else{
      //  Add New Book, if State Not Exist
       this.bookService.createNewBook(finalBooksDetails).subscribe({
          next:(respone=>{
              alert('New State is Successfully Created')
              this.selectedBook = {
                state:'',
                schoolName:'',
                gradeInfo:'',
                books:{
                   book:'',
                   subtitle:'',
                   bookImageUrl:'',
                   details:'Description',
                   describe:'',
                   bookBuyLink:''

                },


          }
          }),
          error:(reject=>{
            console.log(reject)
          })
       })
    }

  }

}
