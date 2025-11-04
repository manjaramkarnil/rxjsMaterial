import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'





let MatArr = [MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatSelectModule
  ,MatToolbarModule,MatToolbarModule,MatTabsModule,MatSliderModule,MatSidenavModule,MatPaginatorModule,MatListModule
  ,MatSnackBarModule,MatDialogModule,MatCardModule, ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,...MatArr
  ],exports : [...MatArr]
})
export class MaterialModule { }
