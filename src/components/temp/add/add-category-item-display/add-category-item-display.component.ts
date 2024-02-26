import { CommonModule, Location } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { Auther, CategoryItemDisplay, LanguageEnumTbl } from '../../../../model/category/categories.interface';
import { ResponseMessage } from '../../../../model/response-message.model';
import { CategoryService } from '../../../../services/category/category.service';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddAutherDialogComponent } from '../../../shared/dialogs/add-auther-dialog/add-auther-dialog.component';

@Component({
  selector: 'app-add-category-item-display',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-category-item-display.component.html',
  styleUrl: './add-category-item-display.component.css'
})
export class AddCategoryItemDisplayComponent implements OnInit, OnChanges {

  showLoader: boolean = false;
  message: string = "";
  isActive: boolean = false;
  itemKey: string = "";

  categoryItemDisplay: CategoryItemDisplay = { CategoryItemDisplayId: 0, CategoryListItemId: 0, IsActive: 1, Title: "", CurrentLanguageId: 1, MarkDownContent: '', MarkDownFileUrl: '', TimeToRead: "1", AuthorId: 0 };

  LanguagesEnumNotEntered: LanguageEnumTbl[] = [];

  AutherList$: Observable<Auther[]> = of([]);

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private location: Location,
    private categoryService: CategoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAuthers();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route) => {
      this.categoryItemDisplay.CategoryListItemId = route["CategoryListItemId"];
      this.itemKey = route["ItemKey"];

      this.categoryService.getLanguageEnumNotEntered(this.categoryItemDisplay.CategoryListItemId)
        .subscribe({
          next: ((langs) => {
            this.LanguagesEnumNotEntered = langs;
          })
        })

      this.getAuthers();
    });
  }

  getAuthers() {
    this.AutherList$ = this.categoryService.getAuthers();
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

    this.categoryService.addCategoryItemDisplay(this.categoryItemDisplay).subscribe({
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
