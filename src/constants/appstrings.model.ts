export class AppStrings {

    //Make sure that starting route matches exactly as Categories enum

    public static Home: string = 'Home';

    public static Stutie: string = 'Stuties';
    public static StutieItemRoute: string = 'Stuties/:stutiKey/:language';

    public static Mantras: string = 'Mantras';
    public static MantraItemRoute: string = 'Mantras/:mantraId/:languageId';

    public static Bhajans: string = 'Bhajans';
    public static BhajanItemRoute: string = 'Bhajans/:bhajansId/:languageId';

    public static Jyortilingas12: string = 'Jyortilingas12';
    public static JyortilingaItemRoute: string = 'Jyortilingas12/:jyortilingId/:languageId';

    // http://localhost:4200/Jyortilingas12/Sanskrit

    public static ShivNames108: string = 'Shivnames108/';
    public static ShivNames108Route: string = 'Shivnames108/:languageId';
    
    public static ShivNames1000: string = 'Shivnames1000';
    public static ShivNames1000Route: string = 'Shivnames1000/:languageId';

    public static ShivChalisa: string = 'ShivChalisa';
    public static ShivChalisaRoute: string = 'ShivChalisa/:languageId';

    public static ErrorRoute: string = '**';
 }