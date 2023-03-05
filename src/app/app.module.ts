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
import { ProductsComponent } from './products/products.component';


const appRoutes: Routes=[
  {path:"", component: HomeComponent},
  {path:"nidaaluminyum", component: HomeComponent},
  {path:"hakkimizda", component: AboutUsComponent},
  {path:"projeler", component: ProjectsComponent},
  {path:"tamamlanan-projeler", component: CompletedProjectsComponent},
  {path:"bize-ulasin", component: ContactUsComponent},
  {path:"vizyon-misyon", component: VisionMissionComponent},
  {path:"urunler", component: ProductsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ProjectsComponent,
    CompletedProjectsComponent,
    ContactUsComponent,
    VisionMissionComponent,
    ProductsComponent
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
