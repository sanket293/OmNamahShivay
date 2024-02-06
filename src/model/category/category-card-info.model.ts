import { CategoryEnum } from "../../enums/category-enum.enum";
import { Languages } from "../../enums/languages.enum";

export interface CategoryCardInfo { 
    category:CategoryEnum;
    imgUrl:string;
    availableLanguages:Languages[];
    routeUrl:string;
    title:string;   
    itemKey:string;
   }
   