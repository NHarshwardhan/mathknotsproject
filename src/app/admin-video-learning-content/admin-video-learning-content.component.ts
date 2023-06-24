import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-admin-video-learning-content',
  templateUrl: './admin-video-learning-content.component.html',
  styleUrls: ['./admin-video-learning-content.component.css']
})
export class AdminVideoLearningContentComponent {

    @Input() selectedOption:any

    @Input() bookDetails:any

    selectedState:any;

    selectedSchool:any;

    selectedGrade:any;

    selectedSection:any
    selectedChapter:any
    selectedUnit:any;
    selectedMaterial:any

    UserInputContent:any;
    UserInputColor:any
    UserInputUnit:any
    file:File | undefined;

    @ViewChild('fileInput') fileInput: any;
    fileAttr = 'Choose File';

    constructor(private bookService:PanelService){}


    save(selectedOption:any){

         if(selectedOption==='Add Content'){
                let videoData = {content:this.UserInputContent,seen:true,color:this.UserInputColor,data:[]}

              // school if Exist
                 let schoolFound = this.selectedSchool.gradeInfo.find((sn:any)=>sn.name===this.selectedGrade.name)

                 if(schoolFound){
                    schoolFound.videoSection=[... schoolFound.videoSection,videoData]


                    this.bookService.updateGrade(this.selectedState).subscribe({
                      next:(response=>{
                              alert(`Section has added`)

                      }),
                      error:(reject=>{
                          console.log(reject)
                      })
                  })
                 }
                  else{
                        alert("Please add Grade First ")
                  }



         }
         else if(selectedOption==='Add Chapter'){
              let meterialToRead = [
                {
                  key: "pd",
                  name: "Practice Drills",
                  visible: true,
                  material:[]

                },
                {
                  key: "pq",
                  name: "Practice Questions",
                  visible: true,
                  material:[]

                },
                {
                  key: "vl",
                  name: "Video Lectures",
                  visible: false,
                  material:[]

                },
                {
                  key: "ws",
                  name: "Worksheets",
                  visible: false,
                  material:[]

                },
                {
                  key: "vs",
                  name: "Worksheets",
                  visible: false,
                  material:[]

                }
              ]

               // content if Exist
                 let gradeFound = this.selectedGrade.videoSection.find((sn:any)=>sn.content===this.selectedSection.content)


                 if(gradeFound){

                    let foundChapter = gradeFound.data.find((chapter:any)=> chapter.name===this.UserInputContent)

                    if(foundChapter !==undefined){
                            //mila
                            foundChapter.children=[...foundChapter.children,{name:this.UserInputUnit,children:meterialToRead}]
                            this.bookService.updateGrade(this.selectedState).subscribe({
                              next:(response=>{
                                      alert(`Section has added`)

                              }),
                              error:(reject=>{
                                  console.log(reject)
                              })
                          })
                    }
                    else{
                            //nahi mila
                            let temp = {name:this.UserInputContent,children:[{name: this.UserInputUnit,children:meterialToRead}]}

                            gradeFound.data=[...gradeFound.data,temp]
                            console.log(this.selectedState)

                              this.bookService.updateGrade(this.selectedState).subscribe({
                                next:(response=>{
                                        alert(`Section has added`)

                                }),
                                error:(reject=>{
                                    console.log(reject)
                                })
                            })

                    }


                 }
                  else{
                        alert("Please add Content First ")
                  }


         }
         else if(selectedOption==='Add Material'){

           let unitFound = this.selectedChapter.children.find((sc:any)=>sc.name===this.selectedUnit.name)
            // Create form data
            let formData = new FormData();

            // Store form name as "file" with file data
            formData.append("thumbnail", this.file!);

            console.log(JSON.stringify(formData))


          //   if(unitFound){

          //     let materialFound = unitFound.children.find((mtrl:any)=>mtrl.name=== this.selectedMaterial.name)

          //     let lessonExist = this.selectedMaterial.material.find((less:any)=>less.name=== this.UserInputContent)

          //     if(lessonExist){
          //           lessonExist.video=[ ...lessonExist.video,{src:formData}]

          //     }
          //     else{
          //       materialFound.material=[...materialFound.material,{name:this.UserInputContent,video:[{src:formData}]}]

          //     }


          //     this.bookService.updateGrade(this.selectedState).subscribe({
          //       next:(response=>{
          //               alert(`Material has added`)

          //       }),
          //       error:(reject=>{
          //           console.log(reject)
          //       })
          //   })

          //  }





     }

    }


    uploadFileEvt(event: any) {
      this.file = event.target.files[0];
      this.fileAttr = this.file!.name + ' - ';



    }

}
