import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';


const appRoutes: Routes=[
  {path:"", component: HomeComponent},
  {path:"NidaAluminyum", component: HomeComponent},
  {path:"Hakkımızda", component: AboutUsComponent},
  {path:"Projeler", component: ProjectsComponent},
  {path:"Tamamlanmış-Projeler", component: CompletedProjectsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ProjectsComponent,
    CompletedProjectsComponent
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
