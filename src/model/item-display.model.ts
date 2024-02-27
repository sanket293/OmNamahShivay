import { Auther } from "./categories.interface";
import { ItemLanguageTag } from "./item-language-tag.model";

export interface ItemDisplay {
    posterUrl: string;
    title: string;
    timeToRead: string;
    availableInLanguages: ItemLanguageTag[];
    currentItemLanguage: string;
    markDownContantUrl: string;
    auther: Auther;
}
