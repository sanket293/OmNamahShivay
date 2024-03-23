import { Languages } from "../enums/languages.enum";

export class AppUtilites {

    public static API_BASE_URL = "https://omnamahshivay-api-4f107e2d42b2.herokuapp.com/";
    public static getLanguageName(languageEnum: Languages = Languages.Hindi): string {
        return Languages[languageEnum].toString();
    }
}