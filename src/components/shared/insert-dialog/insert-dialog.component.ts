import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-insert-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './insert-dialog.component.html',
  styleUrl: './insert-dialog.component.css'
})
export class InsertDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public tagType: string) { }
 
  ngOnInit(): void {
    console.log('...'+JSON.stringify(this.tagType))
  }
}
