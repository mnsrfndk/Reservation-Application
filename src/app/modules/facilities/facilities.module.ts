import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FacilitiesRoutingModule } from './facilities-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    FacilitiesComponent,
    ListComponent,
    DetailsComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})


export class FacilitiesModule {

  
 }
