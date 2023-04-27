import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-instrument-dialog',
  templateUrl: './add-instrument-dialog.component.html',
})
export class AddInstrumentDialogComponent {
  instrumentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddInstrumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.instrumentForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveInstrument(): void {
    // TODO: Implement save instrument logic
    console.log(this.instrumentForm.value);
    this.dialogRef.close();
  }
}
