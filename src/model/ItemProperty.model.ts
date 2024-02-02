import { Categories } from "../enums/categories.enum";
import { Languages } from "../enums/languages.enum";

export interface ItemProperty {
    name: string;
    Itemkey: string;
    category: Categories;
    language: Languages;
    routeUrl: string;
}