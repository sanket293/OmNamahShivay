import { ItemProperty } from "./ItemProperty.model";
import { Auther } from "./auther.model";
import { ItemLanguageTag } from "./item-language-tag.model";

export interface ItemDisplay {
    posterUrl: string;
    title: string;
    timeToRead: string;
    availableInLanguages: ItemLanguageTag[];
    currentItemLanguage: string;
    markDownContantUrl: string;
    auther:Auther;
}
