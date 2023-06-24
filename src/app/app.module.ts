import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { WholeNumbersComponent } from './whole-numbers/whole-numbers.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BookComponent } from './book/book.component';
import { GradeComponent } from './book/grade/grade.component'
import {MatTreeModule} from '@angular/material/tree';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { VideolearnComponent } from './videolearn/videolearn.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import { VideolearnContentComponent } from './videolearn-content/videolearn-content.component';
import { VideoDocContentComponent } from './video-doc-content/video-doc-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogVideoContentComponent } from './dialog-video-content/dialog-video-content.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddCoursewareComponent } from './add-courseware/add-courseware.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BookDisplayComponent } from './book-display/book-display.component';
import { AddBookComponent } from './add-book/add-book.component';
import {MatInputModule} from '@angular/material/input';
import { AdminVideoLearningComponent } from './admin-video-learning/admin-video-learning.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdminVideoLearningContentComponent } from './admin-video-learning-content/admin-video-learning-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    WholeNumbersComponent,
    BookComponent,
    GradeComponent,
    VideolearnComponent,
    VideolearnContentComponent,
    VideoDocContentComponent,
    DialogVideoContentComponent,
    HeaderComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddCoursewareComponent,
    BookDisplayComponent,
    AddBookComponent,
    AdminVideoLearningComponent,
    AdminVideoLearningContentComponent
  ],
  imports: [
    BrowserModule,MatRadioModule,MatTooltipModule,MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,MatButtonModule,MatIconModule,
    MatCardModule,MatSelectModule,MatFormFieldModule,
    FormsModule,MatTreeModule,MatTabsModule,
    MatExpansionModule,HttpClientModule,
    MatChipsModule,MatRippleModule,
    MatDialogModule,FormsModule,ReactiveFormsModule,
    FlexLayoutModule,MatCheckboxModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
