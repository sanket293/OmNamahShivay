import { CategoryEnum } from "../../enums/category-enum.enum";

export interface Category { 
    categoryId: CategoryEnum;
    categoryName: string;
    categoryNameSanskrit: string;//categoryNameLabel
    itemCount: number;
    displayOrder: number;
    routeUrl: string;
  }
  