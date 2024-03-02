import { Languages } from "../enums/languages.enum";
import { ItemProperty } from "../model/ItemProperty.model";
import { VCategoryItemDisplay } from "../model/categories.interface";
import { ItemLanguageTag } from "../model/item-language-tag.model";

export class AppUtilites {

    public static shuffle = (array: ItemProperty[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };


    public static getLanguageName(languageEnum: Languages = Languages.Hindi): string {
        return Languages[languageEnum].toString();
    }

    public static getAvailableLanguagesId(availableLanguages: string): Languages[] {
        let languages: Languages[] = [];
        if (availableLanguages) {
            if (!availableLanguages.includes(',')) return [parseInt(availableLanguages)];

            availableLanguages?.split(',').map(m => parseInt(m)).forEach(langId => languages.push(langId));
        }
        return languages;
    }

    // public static getAvailableLanguagesName(availableLanguages: string): string[] {
    //     let languages: string[] = [];
    //     this.getAvailableLanguagesId(availableLanguages).forEach(langs => languages.push(this.getLanguageName(langs)));
    //     return languages;
    // }

    static getRouteUrlLangItemDisplay(availableLanguages: string, itemDisplay: VCategoryItemDisplay): ItemLanguageTag[] {
        //TODO: fix perma link 
        let itemLanguageTagList: ItemLanguageTag[] = [];
        this.getAvailableLanguagesId(availableLanguages).forEach(langs => {
            var langName = this.getLanguageName(langs);
            var routeUrl = `/ItemDisplay/${(itemDisplay.ParmaLinkDescription) ?? itemDisplay.Title}/${itemDisplay.CategoryListItemId}/${langs}/${availableLanguages}`;
            itemLanguageTagList.push({ name: langName, routeUrl: routeUrl });
        });
        return itemLanguageTagList;
    }


}