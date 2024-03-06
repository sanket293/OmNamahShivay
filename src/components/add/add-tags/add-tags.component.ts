import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ResponseMessage } from '../../../model/response-message.model';
import { AddItemsService } from '../../../services/add-items/add-items.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { AddAutherDialogComponent } from '../add-auther-dialog/add-auther-dialog.component';
import { Tags } from '../../../model/tags.interface';
@Component({
  selector: 'app-add-tags',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-tags.component.html',
  styleUrl: './add-tags.component.css'
})
export class AddTagsComponent {
  constructor(
    public dialogRef: MatDialogRef<AddAutherDialogComponent>,
    private addItemsService: AddItemsService,
    private snackBar: MatSnackBar) { }

  tag: Tags = { Name: "", RouteUrl: "" }
  showLoader: boolean = false;

  onInsertRecordBtnClick() {
    if (!this.tag.Name) {
      this.snackBar.open("Please enter tag name");
      return;
    }

    this.addItemsService.addTags(this.tag).subscribe({
      next: (response: ResponseMessage) => {
        if (response.success) {
          this.dialogRef.close();
          this.snackBar.open("successfully inserted Tag!");
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
