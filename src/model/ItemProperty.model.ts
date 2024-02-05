import { CategoryListItem } from "../enums/category-list-item.enum";
import { Languages } from "../enums/languages.enum";

export interface ItemProperty {
    name: string;
    itemKey: string;
    category: CategoryListItem;
    language: Languages;
    routeUrl: string;
}