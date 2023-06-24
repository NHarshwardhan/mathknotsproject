import { Component } from '@angular/core';

@Component({
  selector: 'app-whole-numbers',
  templateUrl: './whole-numbers.component.html',
  styleUrls: ['./whole-numbers.component.css']
})
export class WholeNumbersComponent {
  education_level = '';
  exam_title = '';
  gender = '';
  degreeTitleList = [];

  numberList: any = [
    {
      'Chapter': 'Number & Number Sense',
       'Unit': [
        {
          'unitMod':'Write in Words',
           'data':[
              'practice Drills','Video Lectures','Worksheets'
           ]
         }
       ]
    },
    {
      'Chapter': 'Rounding & Estimation',
       'Unit':[
         {  'unitMod':'Number & Number Sense',
            'data':[
            'practice Drills','Video Lectures','Worksheets'
            ],
         },
         {
          'unitMod': 'Rounding & Estimation',
          'data':[
              'practice Drills','Video Lectures','Worksheets'
         ],
         }
       ] 
    } 
     
    
  ];

  educationLevelChangeAction(education:any) {
    console.log(education)
    this.exam_title="";
    let dropDownData = this.numberList.find((data: any) => data.Chapter === education);
    console.log(dropDownData)
    if (dropDownData) {
 
      this.degreeTitleList= dropDownData.Unit
      console.log(this.degreeTitleList)
      if(this.degreeTitleList){
        this.exam_title=this.degreeTitleList[0];
        console.log( this.exam_title)
      }
      
    } else {
      console.log(this.degreeTitleList)
      this.degreeTitleList = [];
    }

  }
}
