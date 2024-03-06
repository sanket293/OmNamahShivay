import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { VCategoryList } from '../../../model/categories.interface';
import { GetItemsService } from '../../../services/get-items/get-items.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<VCategoryList[]> = of([]);

  constructor(private getItemsService: GetItemsService, private router: Router) { }

  ngOnInit(): void {
    this.categories$ = this.getItemsService.getCategoryList();
  }

}
