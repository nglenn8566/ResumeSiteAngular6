import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExamplepageComponent } from './examplepage/examplepage.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    AboutmeComponent,
    ExamplepageComponent,
    EcommerceComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
