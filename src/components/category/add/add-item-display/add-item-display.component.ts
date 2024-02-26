import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Auther, CategoryItemDisplay, LanguageEnumTbl } from '../../../../model/category/categories.interface';
import { ResponseMessage } from '../../../../model/response-message.model';
import { AddAutherDialogComponent } from '../../../shared/dialogs/add-auther-dialog/add-auther-dialog.component';
import { AddItemsService } from '../../../../services/add-items/add-items.service';
import { GetItemsService } from '../../../../services/get-items/get-items.service';

@Component({
  selector: 'app-add-item-display',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-item-display.component.html',
  styleUrl: './add-item-display.component.css'
})
export class AddItemDisplayComponent implements OnInit {

  showLoader: boolean = false;
  message: string = "";
  isActive: boolean = true;
  itemKey: string = "";

  categoryItemDisplay: CategoryItemDisplay = { CategoryItemDisplayId: 0, CategoryListItemId: 0, IsActive: 1, Title: "", CurrentLanguageId: 1, MarkDownContent: '', MarkDownFileUrl: '', TimeToRead: "1", AuthorId: 0 };

  LanguagesEnumNotEntered: LanguageEnumTbl[] = [];

  AutherList$: Observable<Auther[]> = of([]);

  constructor(private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location,
    private getItemsService: GetItemsService,
    private addItemsService: AddItemsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route) => {
      this.categoryItemDisplay.CategoryListItemId = route["CategoryListItemId"];
      this.itemKey = route["ItemKey"];

      this.getItemsService.getLanguageEnumNotEntered(this.categoryItemDisplay.CategoryListItemId)
        .subscribe({
          next: ((langs) => {
            this.LanguagesEnumNotEntered = langs;
          })
        })

      this.getAuthers();
    });
  }

  getAuthers() {
    this.AutherList$ = this.getItemsService.getAuthers();
  }

  onRefreshAutherBtnClick() {
    this.AutherList$ = this.getItemsService.getAuthers();
  }
  onAddAutherBtnClick() {
    this.dialog.open(AddAutherDialogComponent);
  }

  onInsertRecordBtnClick() {
    this.message = "";
    this.showLoader = true;

    if (!this.categoryItemDisplay.Title) {
      this.message = "Title  ";
    }

    if (this.message) {
      this.showLoader = false;
      return;
    }

    this.categoryItemDisplay.IsActive = +this.isActive;

    this.addItemsService.addCategoryItemDisplay(this.categoryItemDisplay).subscribe({
      next: (response: ResponseMessage) => {
        this.message = response.message;
        // this.router.navigate([`/CategoryList/${this.categoryItemDisplay.CategoryListId}`]);
        this.location.back();
      },
      error: (err) => {
        this.message = "There is some error: " + JSON.stringify(err);
      },
      complete: () => {
        this.showLoader = false;
      }
    });

  }
}
