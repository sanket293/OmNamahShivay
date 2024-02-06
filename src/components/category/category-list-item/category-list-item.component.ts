import { Component } from '@angular/core';
import { CategoryCardInfoComponent } from "../category-card-info/category-card-info.component";
import { Observable } from 'rxjs';
import { CategoryEnum } from '../../../enums/category-enum.enum';
import { CategoryCardInfo } from '../../../model/category/category-card-info.model';
import { CategoryCardInfoService } from '../../../services/category-card-info/category-card-info.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryListItem } from '../../../model/category/category-list-item.model';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../enums/languages.enum';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.css',
  imports: [CategoryCardInfoComponent, CommonModule, RouterModule],
})

//Stutie or Mantras or Bhajans
export class CategoryListItemComponent {

  categoryListItemInfo$!: Observable<CategoryListItem>;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    var categoryItemStr = this.route.snapshot.params['categoryListItem'];
    this.categoryListItemInfo$ = this.categoryService.getCategoryListItemInfo(categoryItemStr);
  }

  getLanguageName(languageId: number) {
    return Languages[languageId];
  }

  getRouteUrlForLanguageTag(item: CategoryCardInfo, languageId: number) {
    return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[languageId]}`; //Don't forget to use absolute path, put / infront of route, this will replace whole path insted of just append 
  }

  getPostUrl(item: CategoryCardInfo) {
    return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[1]}`;
  }
}
