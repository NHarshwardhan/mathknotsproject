import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-videolearn-content',
  templateUrl: './videolearn-content.component.html',
  styleUrls: ['./videolearn-content.component.css']
})
export class VideolearnContentComponent implements OnDestroy {

  CourseWareDetails : any[] = []
  docContent = false
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor( private http: HttpClient,private panel:PanelService) {
    this.panel.cardData.subscribe({
      next:(data:any)=>{
        this.docContent = false
        this.CourseWareDetails = data
        this.dataSource.data = data['data']

      }
     })
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;


  showContent(doc:any){
      console.log(doc)
      this.docContent = true
      this.panel.DocSelection.next(doc)
  }

  ngOnDestroy(): void {
    console.log('inside destroy')

    this.docContent = false
    this.panel.DocSelection.next('')
  }


}
