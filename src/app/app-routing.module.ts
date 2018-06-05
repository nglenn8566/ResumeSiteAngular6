import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path:'about', component: AboutmeComponent},
  {path:'skills', component: SkillsComponent},
  {path:'work', component: WorkComponent},
  {path:'contact', component: ContactComponent},
  {path:'education', component: EducationComponent},
  {path: '', redirectTo: 'about', pathMatch:'prefix'},
  {path:'**', redirectTo:'about', pathMatch:'prefix'},
  {path:'*/*', redirectTo:'about', pathMatch:'prefix'}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
