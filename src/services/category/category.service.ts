import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs'; 
import { AppStrings } from '../../constants/appstrings.model';
import { Languages } from '../../enums/languages.enum';
import { Category } from '../../model/category.model';
import { CategoryListItem } from '../../enums/category-list-item.enum';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategoryList(): Observable<Category[]> {

    var categories: Category[] = [
      {
        categoryId: CategoryListItem.Stuties,
        categoryName: "Shiv Stuties",
        categoryNameSanskrit: "शिव जी की स्तुति",
        itemCount: 12,
        displayOrder: 1,
        routeUrl: AppStrings.Stuties
      },
      {
        categoryId: CategoryListItem.Mantras,
        categoryName: "Lord Shiva Mantra",
        categoryNameSanskrit: "भगवान शिव के मंत्र",
        itemCount: 7,
        displayOrder: 2,
        routeUrl: AppStrings.Mantras
      },
      // {
      //   categoryId: Categories.Bhajans,
      //   categoryName: "Lord Shiva Bhajans",
      //   categoryNameSanskrit: "शिव जी के भजन",
      //   itemCount: 25,
      //   displayOrder: 3,
      //   routeUrl: AppStrings.BhajansListRoute
      // },
      {
        categoryId: CategoryListItem.ShivChalisa,
        categoryName: "Shiv Chalisa",
        categoryNameSanskrit: "शिव चालीसा",
        itemCount: 1,
        displayOrder: 4,
        routeUrl: `${AppStrings.ShivChalisa}/${CategoryListItem[CategoryListItem.ShivChalisa]}/${Languages[Languages.Sanskrit]}`
      },
      {
        categoryId: CategoryListItem.ShivNames1000,
        categoryName: "1000 Names of Lord Shiva",
        categoryNameSanskrit: "शिव जी के 1000 नाम",
        itemCount: 1,
        displayOrder: 3,
        routeUrl: `${AppStrings.ShivNames1000}/${Languages[Languages.Sanskrit]}`
      },
      {
        categoryId: CategoryListItem.Jyortilingas12,
        categoryName: "12 Jyortilingas of Lord Shiva",
        categoryNameSanskrit: "शिव जी के 12 ज्योर्तिलिङ्गाः",
        itemCount: 1,
        displayOrder: 5,
        routeUrl: `${AppStrings.Jyortilingas12}`
      },

    ];

    return of(categories.sort(s => s.displayOrder));
  }

  
}

