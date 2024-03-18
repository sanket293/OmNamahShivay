import { Languages } from "../enums/languages.enum";

export class AppUtilites {

    public static API_BASE_URL = "http://18.222.183.218:7000/";
    public static getLanguageName(languageEnum: Languages = Languages.Hindi): string {
        return Languages[languageEnum].toString();
    }
}