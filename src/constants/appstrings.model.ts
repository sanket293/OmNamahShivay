export class AppStrings {

    //Make sure that starting route matches exactly as Categories enum

    public static Home: string = 'Home';

    public static StutieListRoute: string = 'Stuties';
    public static StutieItemRoute: string = 'Stuties/:stutiKey/:language';

    public static MantrasListRoute: string = 'Mantras';
    public static MantraItemRoute: string = 'Mantras/:mantraId/:languageId';

    public static BhajansListRoute: string = 'Bhajans';
    public static BhajanItemRoute: string = 'Bhajans/:bhajansId/:languageId';

    public static Names108Route: string = 'Shivnames108/:languageId';

    public static Names1000: string = 'Shivnames1000';
    public static Names1000Route: string = 'Shivnames1000/:languageId';

    public static ShivChalisa: string = 'ShivChalisa';
    public static ShivChalisaRoute: string = 'ShivChalisa/:languageId';

    public static ErrorRoute: string = '**';
 }