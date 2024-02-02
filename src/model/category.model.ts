import { Categories } from "../enums/categories.enum";

export interface Category { 
    categoryId: Categories;
    categoryName: String;
    categoryNameSanskrit: String;
    itemCount: number;
    displayOrder: number;
    routeUrl: string;
  }
  