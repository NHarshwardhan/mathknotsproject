import { Component, OnInit } from '@angular/core';
import { AddCoursewareService } from '../add-courseware.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-courseware',
  templateUrl: './add-courseware.component.html',
  styleUrls: ['./add-courseware.component.css']
})
export class AddCoursewareComponent implements OnInit {

  gradeInfo :any
  content: any
  chapterInfo:any
  unitInfo:any
  subUnitData: any
  selectedValue:any = {
         state:'',
         school:'',
         grade:'',
         content:'',
         chapter:'',
         unit:''
  }
  allCourseData:any
  unitMaterial: any
  allComplete: boolean = false;
  msg = ''
  constructor(private httpService:AddCoursewareService,private _formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.httpService.getAllDetails().subscribe({
        next:(response)=>{
             console.log(response)
             this.allCourseData = response
            //  console.log(object)
            //  response.forEach((r:any,index:any)=>{
            //          this.gradeInfo = r.name
            //         this.content= r.videoSection[index]?.content
            //         this.chapterInfo = r.videoSection[index]?.data[index]?.name
            //         this.unitInfo = r.videoSection[index]?.data[index]?.children
            //  })
        },
        error:(reason)=>{

        }
    })
  }

  setAll(checked:boolean,record:any){
    record.visible = checked

  }
  saveRecord(){
      let finalData = {...this.selectedValue.state}
      console.log(finalData)
      this.httpService.updateDetails(finalData).subscribe({
        next:(response=>{
              alert('successfully updated')
              this.selectedValue = {
                grade:'',
                content:'',
                chapter:'',
                unit:''
              }
        }),
        error:(reason=>{
            console.log(reason)
        })
      })


    }


}
