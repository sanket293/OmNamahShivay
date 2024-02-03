export class AppStrings {

    //Make sure that starting route matches exactly as Categories enum

    public static Home: string = 'Home';
    public static HomeLower: string = 'home';

    public static Stuties: string = 'Stuties';
    public static StutieItemRoute: string = 'Stuties/:itemKey/:language';

    public static Mantras: string = 'Mantras';
    public static MantraItemRoute: string = 'Mantras/:itemKey/:language';

    public static Bhajans: string = 'Bhajans';
    public static BhajanItemRoute: string = 'Bhajans/:itemKey/:language';

    public static Jyortilingas12: string = 'Jyortilingas12';
    public static JyortilingaItemRoute: string = 'Jyortilingas12/:itemKey/:language';

    // http://localhost:4200/Jyortilingas12/Sanskrit

    public static ShivNames108: string = 'Shivnames108/';
    public static ShivNames108Route: string = 'Shivnames108/:language';
    
    public static ShivNames1000: string = 'Shivnames1000';
    public static ShivNames1000Route: string = 'Shivnames1000/:language';

    public static ShivChalisa: string = 'ShivChalisa';
    public static ShivChalisaRoute: string = 'ShivChalisa/:itemKey/:language';

    public static ErrorRoute: string = '**';
 }