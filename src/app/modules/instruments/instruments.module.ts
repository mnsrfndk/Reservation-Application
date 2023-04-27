import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


import { InstrumentsRoutingModule as InstrumentsRoutingModule } from './instruments-routing.module';
import { ListComponent } from './list/list.component';
import { InstrumentsComponent } from './instruments.component';
import { AddInstrumentDialogComponent } from './add-instrument-dialog/add-instrument-dialog.component';


@NgModule({
  declarations: [
    InstrumentsComponent,
    ListComponent,
    AddInstrumentDialogComponent
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  entryComponents: [AddInstrumentDialogComponent]
})
export class InstrumentsModule { }
