import { Component } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService } from '../../../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../../enums/languages.enum';
import { VCategoryListItem } from '../../../../model/categories.interface';
import { AppUtilites } from '../../../../utilities/apputilities.model';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.css',
  imports: [CommonModule, RouterModule],
})

//Stutie or Mantras or Bhajans
export class CategoryListItemComponent {

  categoryNameLabelSanskrit: string = ""; //TODO: get this
  categoryNameLabel: string = "";

  categoryListItemInfo$: Observable<VCategoryListItem[]> = of([]);
  AppUtilites = AppUtilites;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const categoryListId: string = this.route.snapshot.params['categoryListId'];

    this.categoryService.getCategoryList().subscribe((categories) => {
      var currentCategory = categories.find(f => f.CategoryListId === +categoryListId);
      this.categoryNameLabelSanskrit = currentCategory?.CategoryNameLabelSanskrit ?? "Om Namah Shivay";
      this.categoryNameLabel = currentCategory?.CategoryNameLabel ?? "Shiv";
    })

    this.categoryListItemInfo$ = this.categoryService.getCategoryListItem(categoryListId);
  }

  getItemDisplayRouteLink(item: VCategoryListItem, language: Languages) {
    //TODO: set parma link    path: 'ItemDisplay/:parmaLinkDescription/:categoryListItemId/:languageId/:availableLanguages',
    return `/ItemDisplay/${(item.ParmaLinkDescription ?? item.ItemKey)}/${item.CategoryListItemId}/${language}/${item.AvailableLanguages}`;
  }

  getPostUrl(item: VCategoryListItem) {
    const firstLanguage = AppUtilites.getAvailableLanguagesId(item.AvailableLanguages)[0];
    return this.getItemDisplayRouteLink(item, firstLanguage);
  }

}

// getLanguage(languageId: Languages): string {
//   return Languages[languageId].toString();
// }

// getAvailableLanguagesId(availableLanguages: string): Languages[] {
//   let languages: Languages[] = [];
//   if (availableLanguages) {
//     if (!availableLanguages.includes(',')) return [parseInt(availableLanguages)];

//     availableLanguages?.split(',').map(m => parseInt(m)).forEach(langId => languages.push(langId));
//   }
//   return languages;
// }
// return `/ItemDisplay/${item.CategoryListItemId}/${firstLanguage}/${item.ItemKey}`; //TODO: set parma link

// getAvailableLanguages(availableLanguages: string): ItemLanguageTag[] {

//   let languages: ItemLanguageTag[] = [];
//   if (availableLanguages) {
//     if (!availableLanguages.includes(',')) {
//       const language = Languages[parseInt(availableLanguages)];
//       return [{ name: language, routeUrl: this.getLanguageRouteLink(language) }];
//     }

//     availableLanguages?.split(',').map(m => parseInt(m)).forEach(f => languages.push({ name: Languages[f]?.toString(), routeUrl: this.getLanguageRouteLink(Languages[f]?.toString()) }));
//   }
//   return languages;
// }

// getLanguageName(languageId: number) {
//   return Languages[languageId]; //TODO: change this, it should be coming from api call and saved it to service and retrive it from there
// }
// getAvailableLanguages(availableLanguages: string): string[] {
//   let languages: string[] = [];

//   let languagesEnum = this.getAvailableLanguagesId(availableLanguages);

//   languagesEnum.forEach(lang => { languages.push(Languages[lang]) })

//   return languages;
//   // if (availableLanguages) {
//   //   if (!availableLanguages.includes(',')) {
//   //     return [Languages[parseInt(availableLanguages)]];
//   //   }

//   //   availableLanguages?.split(',').map(m => parseInt(m)).forEach(f => languages.push(Languages[f]?.toString()));
//   // }
//   // return languages;
// }



// getLanguageEnum(language: string): Languages {
//   return Languages[language as keyof typeof Languages]
// }

// return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[languageId]}`; //Don't forget to use absolute path, put / infront of route, this will replace whole path insted of just append
// return "";//TODO: fix this

