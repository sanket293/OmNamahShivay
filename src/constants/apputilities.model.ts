import { Languages } from "../enums/languages.enum";

export class AppUtilites {

    public static getLanguageName(languageEnum: Languages = Languages.Hindi): string {
        return Languages[languageEnum].toString();
    }
}