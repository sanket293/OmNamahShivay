import { Categories } from "../enums/categories.enum";
import { Languages } from "../enums/languages.enum";

export interface Tag {
    tagName: string;
    tagValue: string;
    tagCategory: Categories;
    tagLanguage: Languages;
    tagUrl: string;
}