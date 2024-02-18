import { CategoryEnum } from "../../enums/category-enum.enum";
import { Languages } from "../../enums/languages.enum";

export interface CategoryCardInfo { 
    category:CategoryEnum;
    itemImgUrl:string;//ItemImgUrl
    availableLanguages:Languages[]; //TOOD: change this to may be language tag?, so if user click on that, it will redirect directly
    titleRouteUrl:string;//TitleRouteUrl
    title:string;   
    itemKey:string;
   }
   