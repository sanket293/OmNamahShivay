import { CategoryListItem } from "../enums/category-list-item.enum";

export interface Category { 
    categoryId: CategoryListItem;
    categoryName: String;
    categoryNameSanskrit: String;
    itemCount: number;
    displayOrder: number;
    routeUrl: string;
  }
  