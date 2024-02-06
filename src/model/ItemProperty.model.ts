import { CategoryEnum } from "../enums/category-enum.enum";
import { Languages } from "../enums/languages.enum";

export interface ItemProperty {
    name: string;
    itemKey: string;
    category: CategoryEnum;
    language: Languages;
    routeUrl: string;
}