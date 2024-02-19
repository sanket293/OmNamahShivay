import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { ResponseMessage } from '../../../model/response-message.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-insert-dialog',
    standalone: true,
    templateUrl: './insert-dialog.component.html',
    styleUrl: './insert-dialog.component.css',
    imports: [MatDialogModule, MatButtonModule, RouterModule, CommonModule, FormsModule, LoaderComponent]
})
export class InsertDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public tagType: string,
    public dialogRef: MatDialogRef<InsertDialogComponent>,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar) { }

  enumValue: string = "";
  showLoader: boolean = false;

  ngOnInit(): void {
  }

  onInsertEnumClick() {
    if(!this.enumValue){
      this.snackBar.open("Please enter enum value");
      return;
    }

    if (this.tagType === "CategoryEnum") {
      this.insertCategoryEnum();
    } else {
      this.insertLanguageEnum();
    }
  }

  insertCategoryEnum() {
    this.categoryService.addCategoryEnum(this.enumValue).subscribe({
      next: (response: ResponseMessage) => {
        if (response.success) {
          this.dialogRef.close();
          window.location.reload();
          this.snackBar.open("successfully inserted Category Enum");
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

  insertLanguageEnum() {
    this.categoryService.addLanguageEnum(this.enumValue).subscribe({
      next: (response: ResponseMessage) => {
        if (response.success) {
          this.dialogRef.close();
          window.location.reload();
          this.snackBar.open("successfully inserted Language Enum");
        } else {
          console.log("There is something wrong: " + JSON.stringify(response.error));
          this.snackBar.open("There is something wrong, check console log");
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
