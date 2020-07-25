import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.css']
})
export class FileDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public obj: any) {
    console.log(obj);
  }

  ngOnInit(): void {
  }

}
