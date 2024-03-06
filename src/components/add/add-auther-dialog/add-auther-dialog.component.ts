import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../../shared/loader/loader.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseMessage } from '../../../model/response-message.model';
import { Auther } from '../../../model/categories.interface';
import { AddItemsService } from '../../../services/add-items/add-items.service';

@Component({
  selector: 'app-add-auther-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-auther-dialog.component.html',
  styleUrl: './add-auther-dialog.component.css'
})
export class AddAutherDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddAutherDialogComponent>,
    private addItemsService: AddItemsService,
    private snackBar: MatSnackBar) { }

  auther: Auther = { AutherId: "0", AutherImageUrl: "", AutherName: "" };
  showLoader: boolean = false;

  onInsertRecordBtnClick() {
    if(!this.auther.AutherName){
      this.snackBar.open("Please enter Auther's name");
      return ;
    }
    this.addItemsService.addAuther(this.auther).subscribe({
      next: (response: ResponseMessage) => {
        if (response.success) {
          this.dialogRef.close();
          this.snackBar.open("successfully inserted Auther!");
        } else {
          this.snackBar.open("There is something wrong, check console log");
          console.log("There is something wrong: " + JSON.stringify(response.error));
        }
      },
      error: (err) => {
        this.snackBar.open("There is something wrong, check console log");
        console.log("There is some error: " + JSON.stringify(err));
      },
      complete: () => {
        this.showLoader = false;
      }
    });
  }
}
