import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { GradeComponent } from './book/grade/grade.component';
import { VideolearnComponent } from './videolearn/videolearn.component';
import { WholeNumbersComponent } from './whole-numbers/whole-numbers.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddCoursewareComponent } from './add-courseware/add-courseware.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminVideoLearningComponent } from './admin-video-learning/admin-video-learning.component';

const routes: Routes = [
  {path:'wholenumbers',component:WholeNumbersComponent},
  {
     path:'books',component:BookComponent,
    children:[
       {path:'grade',component:GradeComponent}
    ]
   },
   {path:'videolearning', component:VideolearnComponent},
   {path:'login', component: LoginComponent },
   {
    path:'admin', component: AdminDashboardComponent,
    children:[
         {path:'add',component:AddCoursewareComponent},
         {path:'create/book',component:AddBookComponent},
         {path:'video_material',component:AdminVideoLearningComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
