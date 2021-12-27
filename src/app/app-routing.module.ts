import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path:'' , redirectTo:'dashboard' , pathMatch:'full'},
  {path:'members', pathMatch:'full', component : MemberListComponent  },
  {path:'member-create' , pathMatch:'full' , component : MemberFormComponent},
  {path:'create' , pathMatch:'full' , component : MemberFormComponent},
  {path:':id/edit' , pathMatch:'full', component : MemberFormComponent},
  {path:'dashboard' , pathMatch:'full', component : DashboardComponent},
  {path:'articles' , pathMatch:'full', component : ArticleComponent},
  {path:'events' , pathMatch:'full', component : EventComponent},
  {path:'**',redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
