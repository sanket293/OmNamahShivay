import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryEnum } from '../../../enums/category-enum.enum';
import { CategoryCardInfo } from '../../../model/category/category-card-info.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../enums/languages.enum';
import { VCategoryList, VCategoryListItem } from '../../../model/category/categories.interface';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.css',
  imports: [CommonModule, RouterModule],
})

//Stutie or Mantras or Bhajans
export class CategoryListItemComponent {
  categoryListId: string = "0";
  categoryListItemInfo$: Observable<VCategoryListItem[]> = of([]);
  category!: VCategoryList | undefined;

  constructor(private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.categoryListId = this.activatedRoute.snapshot.params['CategoryListId'];

    this.categoryListItemInfo$ = this.categoryService.getCategoryListItem(this.categoryListId);

    this.categoryService.getCategoryList().subscribe(
      data => {
        this.category = data.find(f => f.CategoryListId.toString() === this.categoryListId)
      })
  }

  getLanguageName(languageId: number) {
    return Languages[languageId];
  }

  // getRouteUrlForLanguageTag(item: CategoryCardInfo, languageId: number) {
  //   return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[languageId]}`; //Don't forget to use absolute path, put / infront of route, this will replace whole path insted of just append 
  // }

  getPostUrl(item: CategoryCardInfo) {
    return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[1]}`;
  }

  getAvailableLanguages(availableLanguages: string): string[] {

    let languages: string[] = [];
    if (availableLanguages) {
      if (!availableLanguages.includes(',')) {
        return [Languages[parseInt(availableLanguages)]];
      }

      availableLanguages?.split(',').map(m => parseInt(m)).forEach(f => languages.push(Languages[f]?.toString()));
    }
    return languages;
  }


  getRouteUrlForLanguageTag(listItem: VCategoryListItem): string {
    return "shree";
    //TODO: send next page for update
  }

}

