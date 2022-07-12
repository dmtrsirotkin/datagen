import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataGenerationComponent} from "./data-generation/data-generation.component";
import {ViewPageComponent} from './view-page/view-page.component'

const routes: Routes = [
  {path: 'dataPreparation', component: DataGenerationComponent},
  {path: 'viewPage', component: ViewPageComponent},
  {path: '', redirectTo: 'dataPreparation' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
