import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { LoaderComponent } from "../../../shared/loader/loader.component";
import { Observable, of } from "rxjs";
import { CategoryList, CategoryEnumNotEntered, CategoryEnumTbl } from "../../../../model/category/categories.interface";
import { ResponseMessage } from "../../../../model/response-message.model";
import { CategoryService } from "../../../../services/category/category.service";

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

  categoryList: CategoryList = { CategoryEnumId: 1, CategoryNameLabel: "", CategoryNameLabelSanskrit: "", DisplayOrder: "", IsActive: 1 };
  categoryListId: number = 0;
  CategoryEnumNotEntered$: Observable<CategoryEnumNotEntered[]> = of([]);

  CategoryEnumList$: Observable<CategoryEnumTbl[]> = of([]);

  message: string = "";
  showLoader: boolean = false;
  isActive: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route) => {
      this.categoryListId = route["CategoryListId"];
    });

    this.CategoryEnumNotEntered$ = this.categoryService.getNotEnteredCategoryEnums();
  }

  onInsertRecordBtnClick() {
    this.message = "";
    this.showLoader = true;

    if (!this.categoryList.CategoryEnumId) {
      this.message = "CategoryEnumId  ";
    }
    if (!this.categoryList.CategoryNameLabel) {
      this.message += "CategoryNameLabel  ";
    }
    if (!this.categoryList.CategoryNameLabelSanskrit) {
      this.message += "CategoryNameLabelSanskrit  ";
    }
    if (!this.categoryList.DisplayOrder) {
      this.message += "DisplayOrder  ";
    }
    if (this.message) {
      this.showLoader = false;
      return;
    }

    this.categoryList.IsActive = +this.isActive;

    this.categoryService.addCategoryList(this.categoryList).subscribe({
      next: (response: ResponseMessage) => {
        this.message = response.message;
        this.router.navigate(['']);
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

