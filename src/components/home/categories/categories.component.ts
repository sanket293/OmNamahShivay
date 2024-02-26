import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { VCategoryList } from '../../../model/category/categories.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<VCategoryList[]> = of([]);

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();
  }

}
