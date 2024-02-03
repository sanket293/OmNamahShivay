import { ItemProperty } from "./ItemProperty.model";
import { Auther } from "./auther.model";

export interface ItemDisplay {
    posterUrl: string;
    title: string;
    timeToRead: string;
    availableInLanguages: string[];
    currentItemLanguage: string;
    markDownContantUrl: string;
    auther:Auther;
}
