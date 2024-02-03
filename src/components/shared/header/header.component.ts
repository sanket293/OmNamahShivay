import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../model/category.model';
import { CategoryService } from '../../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagService } from '../../../services/tag/tag.service';
import { ItemProperty } from '../../../model/ItemProperty.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  categories$: Observable<Category[]> | undefined;
  tags$: Observable<ItemProperty[]> | undefined;

  constructor(private categoryService: CategoryService, private tagService: TagService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();
    this.tags$ = this.tagService.getSideNavTags();
  }

}
