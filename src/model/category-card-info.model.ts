import { CategoryListItem } from "../enums/category-list-item.enum";
import { Languages } from "../enums/languages.enum";

export interface CategoryCardInfo {

    category:CategoryListItem;
    imgUrl:string;
    availableLanguages:Languages[];
    routeUrl:string;
    title:string;   
    itemKey:string;
   }
   