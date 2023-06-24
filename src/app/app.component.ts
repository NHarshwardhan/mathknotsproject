import { Component } from '@angular/core';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathknots';
  document = 'assets/pdf/dummy.pdf'
  // ngAfterViewInit() {
  //   const viewer = new GcPdfViewer("#viewer", {
  //     workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
  //     restoreViewStateOnLoad: false
  //   });
  //   viewer.addDefaultPanels();
  //   viewer.open("assets/pdf/dummy.pdf");

  // }
}
