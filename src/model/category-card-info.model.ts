import { Categories } from "../enums/categories.enum";
import { Languages } from "../enums/languages.enum";

export interface CategoryCardInfo {

    category:Categories;
    imgUrl:string;
    availableLanguages:Languages[];
    routeUrl:string;
    title:string;   
    itemKey:string;
   }
   