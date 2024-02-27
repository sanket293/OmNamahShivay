import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryEnum } from '../../../../enums/category-enum.enum';
// import { CategoryCardInfo } from '../../../../model/category/category-card-info.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService } from '../../../../services/category/category.service';
import { CategoryListItem } from '../../../../model/category/category-list-item.model';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../../enums/languages.enum';
import { VCategoryListItem } from '../../../../model/categories.interface';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.css',
  imports: [CommonModule, RouterModule],
})

//Stutie or Mantras or Bhajans
export class CategoryListItemComponent {

  categoryNameLabelSanskrit: string = "";
  categoryNameLabel: string = "";

  categoryListItemInfo$: Observable<VCategoryListItem[]> = of([]);

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const categoryListId:string = this.route.snapshot.params['categoryListId'];
    this.categoryListItemInfo$ = this.categoryService.getCategoryListItem(categoryListId);
  }

  getLanguageName(languageId: number) {
    return Languages[languageId]; //TODO: change this, it should be coming from api call and saved it to service and retrive it from there
  }

  getRouteUrlForLanguageTag(item: VCategoryListItem, language: string) {
    return "";//TODO: fix this
    // return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[languageId]}`; //Don't forget to use absolute path, put / infront of route, this will replace whole path insted of just append 
  }

  getPostUrl(item: VCategoryListItem) {
    return "";//TODO: fix this
    // return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[1]}`;
  }
}
