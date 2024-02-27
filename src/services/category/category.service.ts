import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VCategoryList, VCategoryListItem, Auther } from '../../model/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<VCategoryList[]> {
    return this.http.get<VCategoryList[]>("https://omnamahshivay-api.onrender.com/getCategoryList");
  }

  getCategoryListItem(categoryListId: string): Observable<VCategoryListItem[]> {
    if (!categoryListId) return of([]);
    return this.http.get<VCategoryListItem[]>(`https://omnamahshivay-api.onrender.com/getCategoryListItem/${categoryListId}`);
  }

  getCategoryItemDisplay() {

    //TODO: get
  }

  getAuthers(): Observable<Auther[]> {
    return this.http.get<Auther[]>("https://omnamahshivay-api.onrender.com/getAuthers");
  }
}



//Categories
// getNotEnteredCategoryEnums(): Observable<CategoryEnumNotEntered[]> {
//   return this.http.get<CategoryEnumNotEntered[]>("https://omnamahshivay-api.onrender.com/getNotEnteredCategoryEnums");
// }
// getCategoryEnums(): Observable<CategoryEnumTbl[]> {
//   return this.http.get<CategoryEnumTbl[]>("https://omnamahshivay-api.onrender.com/getCategoryEnums");
// }
// getLanguageEnums(): Observable<LanguageEnumTbl[]> {
//   return this.http.get<LanguageEnumTbl[]>("https://omnamahshivay-api.onrender.com/getLanguageEnums");
// }
// getLanguageEnumNotEntered(categoryListItemId: number): Observable<LanguageEnumTbl[]> {
//   return this.http.get<LanguageEnumTbl[]>(`https://omnamahshivay-api.onrender.com/getLanguageEnumNotEntered/${categoryListItemId}`);
// }





// constructor() { }

// getCategoryList(): Observable<Category[]> {

//   var categories: Category[] = [
//     {
//       categoryId: CategoryEnum.Stuties,
//       categoryName: "Shiv Stuties",
//       categoryNameSanskrit: "शिव जी की स्तुति",
//       itemCount: 2,
//       displayOrder: 1,
//       routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}`
//     },
//     {
//       categoryId: CategoryEnum.Ashtaks,
//       categoryName: "Shiv Ashtakams",
//       categoryNameSanskrit: "शिव जी के अष्टक",
//       itemCount: 8,
//       displayOrder: 2,
//       routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Ashtaks]}`
//     },
//     {
//       categoryId: CategoryEnum.ShivPooja,
//       categoryName: "Shiv Pooja",
//       categoryNameSanskrit: "शिव जी की पूजा",
//       itemCount: 1,
//       displayOrder: 3,
//       routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.ShivPooja]}`
//     },
//     // {
//     //   categoryId: CategoryEnum.Mantras,
//     //   categoryName: "Lord Shiva Mantra",
//     //   categoryNameSanskrit: "भगवान शिव के मंत्र",
//     //   itemCount: 7,
//     //   displayOrder: 2,
//     //   routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Mantras]}`
//     // },
//     // {
//     //   categoryId: Categories.Bhajans,
//     //   categoryName: "Lord Shiva Bhajans",
//     //   categoryNameSanskrit: "शिव जी के भजन",
//     //   itemCount: 25,
//     //   displayOrder: 3,
//     //   routeUrl: AppStrings.BhajansListRoute
//     // },
//     {
//       categoryId: CategoryEnum.ShivChalisa,
//       categoryName: "Shiv Chalisa",
//       categoryNameSanskrit: "शिव चालीसा",
//       itemCount: 1,
//       displayOrder: 4,
//       routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.ShivChalisa]}/${CategoryEnum[CategoryEnum.ShivChalisa]}/${Languages[Languages.Sanskrit]}`
//     },
//     // {
//     //   categoryId: CategoryEnum.ShivNames1000,
//     //   categoryName: "1000 Names of Lord Shiva",
//     //   categoryNameSanskrit: "शिव जी के 1000 नाम",
//     //   itemCount: 1,
//     //   displayOrder: 3,
//     //   routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.ShivNames1000]}/${Languages[Languages.Sanskrit]}`
//     // },
//     // {
//     //   categoryId: CategoryEnum.Jyortilingas12,
//     //   categoryName: "12 Jyortilingas of Lord Shiva",
//     //   categoryNameSanskrit: "शिव जी के 12 ज्योर्तिलिङ्गाः",
//     //   itemCount: 1,
//     //   displayOrder: 5,
//     //   routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Jyortilingas12]}`
//     // },

//   ];

//   return of(categories.sort(s => s.displayOrder));
// }

// getCategoryListItemInfo(categoryEnumStr: string): Observable<CategoryListItem> {

//   switch (categoryEnumStr) {
//     case CategoryEnum[CategoryEnum.Stuties]: {
//       return of({
//         categoryCardInfo$: this.getStutieCategoryCardInfo(),
//         itemText: "शिव जी की स्तुति",
//         postTitle: "Shiv Stuties"
//       });
//     }
//     case CategoryEnum[CategoryEnum.Ashtaks]: {
//       return of({
//         categoryCardInfo$: this.getAshtaksCategoryCardInfo(),
//         itemText: "शिव जी के अष्टक",
//         postTitle: "Shiv Ashtaks"
//       });
//     }
//     case CategoryEnum[CategoryEnum.ShivPooja]: {
//       return of({
//         categoryCardInfo$: this.getShivPoojaCategoryCardInfo(),
//         itemText: "शिव जी की पूजा",
//         postTitle: "Shiv Pojas"
//       });
//     }
//     // case CategoryEnum[CategoryEnum.Ashtaks]: {
//     //    return of({
//     //     categoryCardInfo$: this.getAshtaksCategoryCardInfo(),
//     //     itemText: "भगवान शिव के मंत्र",
//     //     postTitle: "Lord Shiva Mantra"
//     //   });
//     // }
//     // case CategoryEnum[CategoryEnum.Jyortilingas12]: {
//     //    return of({
//     //     categoryCardInfo$: this.getJyortilingsCategoryCardInfo(),
//     //     itemText: "शिव जी के 12 ज्योर्तिलिङ्गाः",
//     //     postTitle: "12 Jyortilingas of Lord Shiva"
//     //   });
//     // }
//   }

//   //todo: if not from anything send null or undefined
//   return of({
//     categoryCardInfo$: this.getStutieCategoryCardInfo(),
//     itemText: "शिव",
//     postTitle: "Shiv"
//   });
// }

// getStutieCategoryCardInfo(): Observable<CategoryCardInfo[]> {
//   let categoryCardInfo: CategoryCardInfo[] = [
//     {
//       category: CategoryEnum.Stuties,
//       availableLanguages: [Languages.Sanskrit],
//       // availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
//       itemImgUrl: "/assets/images/categories/stuties/ShivMahimnaStotam.png",
//       titleRouteUrl: `/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`,
//       title: "श्री शिवमहिम्नस्तोत्रम्‌",
//       itemKey: "ShivMahimnaStotam"
//     },
//     // {
//     //   category: CategoryEnum.Stuties,
//     //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
//     //   imgUrl: "/assets/images/post/post-2.jpg",
//     //   routeUrl: `/Rudrashtakam/${Languages[Languages.Sanskrit]}`,
//     //    title: "शिव रुद्राष्टकम",
//     //   itemKey: "Rudrashtakam"
//     // },
//     // {
//     //   category: CategoryEnum.Stuties,
//     //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
//     //   imgUrl: "/assets/images/post/post-1.jpg",
//     //   routeUrl: `/Shivashtakam/${Languages[Languages.Sanskrit]}`,
//     //    title: "श्री शिवाष्टकं",
//     //   itemKey: "Shivashtakam"
//     // },
//   ];

//   return of(categoryCardInfo);
// }

// getAshtaksCategoryCardInfo(): Observable<CategoryCardInfo[]> {
//   let categoryCardInfo: CategoryCardInfo[] = [
//     {
//       category: CategoryEnum.Ashtaks,
//       availableLanguages: [Languages.Sanskrit],
//       itemImgUrl: "/assets/images/categories/ashtaks/Bilvashtakam.png",
//       titleRouteUrl: `/Bilvashtakam/${Languages[Languages.Sanskrit]}`,
//       title: "बिल्वाश्टकम पाठ",
//       itemKey: "Bilvashtakam"
//     },
//     {
//       category: CategoryEnum.Ashtaks,
//       availableLanguages: [Languages.Sanskrit],
//       itemImgUrl: "/assets/images/categories/ashtaks/Lingashtakam.png",
//       titleRouteUrl: `/Lingashtakam/${Languages[Languages.Sanskrit]}`,
//       title: "लिंगाष्टकम स्तोत्र",
//       itemKey: "Lingashtakam"
//     },
//   ];

//   return of(categoryCardInfo);
// }

// getShivPoojaCategoryCardInfo(): Observable<CategoryCardInfo[]> {
//   let categoryCardInfo: CategoryCardInfo[] = [
//     {
//       category: CategoryEnum.ShivPooja,
//       availableLanguages: [Languages.Sanskrit],
//       itemImgUrl: "/assets/images/categories/shiv-pooja/ShivManasPooja.png",
//       titleRouteUrl: `/ShivManasPooja/${Languages[Languages.Sanskrit]}`,
//       title: "शिव मानस पूजा",
//       itemKey: "ShivManasPooja"
//     },
//   ];

//   return of(categoryCardInfo);
// }


// // getMantraCategoryCardInfo(): Observable<CategoryCardInfo[]> {

// // let categoryCardInfo: CategoryCardInfo[] = [
// //   {
// //     category: CategoryEnum.Mantras,
// //     availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
// //     imgUrl: "/assets/images/post/post-1.jpg",
// //     routeUrl: `/OmNamahShivayMantra/${Languages[Languages.Sanskrit]}`,
// //      title: "ॐ नमः शिवाय",
// //     itemKey: "OmNamahShivayMantra"
// //   },

// //   {
// //     category: CategoryEnum.Mantras,
// //     availableLanguages: [Languages.Sanskrit],
// //     imgUrl: "/assets/images/post/post-2.jpg",
// //     title: "महामृत्युंजय मंत्र",
// //     itemKey: "MahaMrityunjayaMantra",
// //     routeUrl: `/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
// //   },

// // {
// //   category: Categories.Mantras,
// //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
// //   imgUrl: "/assets/images/post/post-2.jpg",
// //   routeUrl: `/${AppStrings.Mantras}/RudraMantra/${Languages[Languages.Sanskrit]}`,
// //   title: "RudraMantra",
// //   itemKey: "RudraMantra"
// // },
// // {
// //   category: Categories.Mantras,
// //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
// //   imgUrl: "/assets/images/post/post-3.jpg",
// //   routeUrl: `/${AppStrings.Mantras}/ShivDhyaanaMantra/${Languages[Languages.Sanskrit]}`,
// //   title: "ShivDhyaanaMantra",
// //   itemKey: "ShivDhyaanaMantra"
// // },
// // {
// //   category: Categories.Mantras,
// //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
// //   imgUrl: "/assets/images/post/post-1.jpg",
// //   routeUrl: `/${AppStrings.Mantras}/PanchakshariMantra/${Languages[Languages.Sanskrit]}`,
// //   title: "PanchakshariMantra",
// //   itemKey: "Panchakshari Mantra"
// // },
// // ];


// //   return of(categoryCardInfo);
// // }

// // getJyortilingsCategoryCardInfo(): Observable<CategoryCardInfo[]> {

// //   let categoryCardInfo: CategoryCardInfo[] = [
// //     {
// //       category: CategoryEnum.Jyortilingas12,
// //       availableLanguages: [Languages.Hindi, Languages.Gujarati, Languages.English],
// //       imgUrl: "/assets/images/post/post-1.jpg",
// //       routeUrl: `/SomnathJyortiling/${Languages[Languages.Sanskrit]}`,
// //        title: "Somnath Jyortiling",
// //       itemKey: "SomnathJyortiling"
// //     },
// //     {
// //       category: CategoryEnum.Jyortilingas12,
// //       availableLanguages: [Languages.Hindi, Languages.Gujarati, Languages.English],
// //       imgUrl: "/assets/images/post/post-2.jpg",
// //       routeUrl: `/MallikarjunJyortiling/${Languages[Languages.Sanskrit]}`,
// //        title: "Mallikarjun Jyortiling",
// //       itemKey: "MallikarjunJyortiling"
// //     },
// //     {
// //       category: CategoryEnum.Jyortilingas12,
// //       availableLanguages: [Languages.Hindi, Languages.Gujarati, Languages.English],
// //       imgUrl: "/assets/images/post/post-3.jpg",
// //       routeUrl: `/KedarnathJyortiling/${Languages[Languages.Sanskrit]}`,
// //        title: "Kedarnath Jyortiling",
// //       itemKey: "KedarnathJyortiling"
// //     },
// //   ];

// //   return of(categoryCardInfo);
// // }



