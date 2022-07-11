import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxFileHelpersModule } from "ngx-file-helpers";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TabComponent} from "./tab/tab.component";
import {MatTableModule} from "@angular/material/table";
import { PopUpAddComponent } from './pop-up-add/pop-up-add.component';
import { PopUpEditComponent } from './pop-up-edit/pop-up-edit.component';
import { DataGenerationComponent } from './data-generation/data-generation.component';

@NgModule({
    declarations: [
        AppComponent,
        TabComponent,
        PopUpAddComponent,
        PopUpEditComponent,
        DataGenerationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxFileHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
