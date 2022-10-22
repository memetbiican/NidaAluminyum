import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';


const appRoutes: Routes=[
  {path:"", component: HomeComponent},
  {path:"NidaAluminyum", component: HomeComponent},
  {path:"Hakkımızda", component: AboutUsComponent},
  {path:"Projeler", component: ProjectsComponent},
  {path:"Tamamlanan-Projeler", component: CompletedProjectsComponent},
  {path:"Bize-Ulasın", component: ContactUsComponent},
  {path:"vizyon-misyon", component: VisionMissionComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ProjectsComponent,
    CompletedProjectsComponent,
    ContactUsComponent,
    VisionMissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
