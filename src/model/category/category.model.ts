import { CategoryEnum } from "../../enums/category-enum.enum";

export interface Category { 
    categoryId: CategoryEnum;
    categoryName: String;
    categoryNameSanskrit: String;
    itemCount: number;
    displayOrder: number;
    routeUrl: string;
  }
  