import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddInstrumentDialogComponent } from './add-instrument-dialog/add-instrument-dialog.component';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
})
export class InstrumentsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openAddInstrumentDialog(): void {
    const dialogRef = this.dialog.open(AddInstrumentDialogComponent, {
      width: '500px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  
  ngOnInit(): void {
  }

}
