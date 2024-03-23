import { Languages } from "../enums/languages.enum";
// import { ItemProperty } from "../model/ItemProperty.model";
import { VCategoryItemDisplay, VCategoryList } from "../model/categories.interface";
import { Tags } from "../model/tags.interface";

export class AppUtilites {

    public static API_BASE_URL = "https://omnamahshivay-api-4f107e2d42b2.herokuapp.com/";

    public static shuffle = (array: Tags[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    public static getCategoryRouteLink(category: VCategoryList): string {
        return `/ListItem/${category.CategoryNameLabelSanskrit}/${category.CategoryListId}`; //TODO: create parma link
      }

    public static getLanguageName(languageEnum: Languages = Languages.Hindi): string {
        return Languages[languageEnum]?.toString() ?? "Hindi";
    }

    public static getAvailableLanguagesId(availableLanguages: string): Languages[] {
        let languages: Languages[] = [];
        if (availableLanguages) {
            if (!availableLanguages.includes(',')) return [parseInt(availableLanguages)];

            availableLanguages?.split(',').map(m => parseInt(m)).forEach(langId => languages.push(langId));
        }
        return languages;
    }

    static getRouteUrlLangItemDisplay(availableLanguages: string, itemDisplay: VCategoryItemDisplay): Tags[] {
        //TODO: fix perma link 
        let itemLanguageTagList: Tags[] = [];
        this.getAvailableLanguagesId(availableLanguages).forEach(langs => {
            var langName = this.getLanguageName(langs);
            var routeUrl = `/ItemDisplay/${(itemDisplay.ParmaLinkDescription) ?? itemDisplay.Title}/${itemDisplay.CategoryListItemId}/${langs}/${availableLanguages}`;
            itemLanguageTagList.push({ Name: langName, RouteUrl: routeUrl });
        });
        return itemLanguageTagList;
    }


}