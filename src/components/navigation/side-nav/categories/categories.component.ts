import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category/category.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCategoryList } from '../../../../model/categories.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<VCategoryList[]> | undefined;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();
  }
  getRouteLink(category: VCategoryList): string {
    return `/ListItem/${category.CategoryListId}/${category.CategoryNameLabelSanskrit}`; //TODO: create parma link
  }

}