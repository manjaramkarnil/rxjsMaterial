import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/model/material/material.module';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { AboutComponent } from './shared/component/about/about.component';
import { CardComponent } from './shared/component/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './shared/component/form/form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EditcardComponent } from './shared/component/editcard/editcard.component';
import { ConfirmComponent } from './shared/component/confirm/confirm.component';
import { MatformComponent } from './shared/component/matform/matform.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    CardComponent,
    FormComponent,
    EditcardComponent,
    ConfirmComponent,
    MatformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
