import { Languages } from "../enums/languages.enum";
import { ItemProperty } from "../model/ItemProperty.model";

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

}