import { Injectable } from '@angular/core';
import { CategoryEnum } from '../../enums/category-enum.enum';
import { Observable, of } from 'rxjs';
import { Languages } from '../../enums/languages.enum';
import { CategoryCardInfo } from '../../model/category/category-card-info.model';
import { AppStrings } from '../../constants/appstrings.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryCardInfoService {
//can remove this service
  constructor() { }
  getCategoryCardInfo(categoryItemStr: string): Observable<CategoryCardInfo[]> {


    switch (categoryItemStr) {
      case CategoryEnum[CategoryEnum.Stuties]: {
        return this.getStutieCategoryCardInfo();
      }
      case CategoryEnum[CategoryEnum.Mantras]: {
        return this.getMantraCategoryCardInfo();
      }
      case CategoryEnum[CategoryEnum.Jyortilingas12]: {
        return this.getJyortilingsCategoryCardInfo();
      }

    }

    return this.getStutieCategoryCardInfo();
  }

  getStutieCategoryCardInfo(): Observable<CategoryCardInfo[]> {
    let categoryCardInfo: CategoryCardInfo[] = [
      {
        category: CategoryEnum.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-1.jpg",
        routeUrl: `/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${Categories[Categories.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`,
        title: "श्री शिवमहिम्नस्तोत्रम्‌",
        itemKey: "ShivMahimnaStotam"
      },
      {
        category: CategoryEnum.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-2.jpg",
        routeUrl: `/Rudrashtakam/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`,
        title: "शिव रुद्राष्टकम",
        itemKey: "Rudrashtakam"
      },
      {
        category: CategoryEnum.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-3.jpg",
        routeUrl: `/Lingashtakam/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${Categories[Categories.Stuties]}/Lingashtakam/${Languages[Languages.Sanskrit]}`,
        title: "लिंगाष्टकम स्तोत्र",
        itemKey: "Lingashtakam"
      },
      {
        category: CategoryEnum.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-1.jpg",
        routeUrl: `/Shivashtakam/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${Categories[Categories.Stuties]}/Shivashtakam/${Languages[Languages.Sanskrit]}`,
        title: "श्री शिवाष्टकं",
        itemKey: "Shivashtakam"
      },
    ];


    return of(categoryCardInfo);
  }

  getMantraCategoryCardInfo(): Observable<CategoryCardInfo[]> {

    let categoryCardInfo: CategoryCardInfo[] = [
      {
        category: CategoryEnum.Mantras,
        availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-1.jpg",
        routeUrl: `/OmNamahShivayMantra/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${AppStrings.Mantras}/OmNamahShivayMantra/${Languages[Languages.Sanskrit]}`,
        title: "ॐ नमः शिवाय",
        itemKey: "OmNamahShivayMantra"
      },

      {
        category: CategoryEnum.Mantras,
        availableLanguages: [Languages.Sanskrit],
        imgUrl: "/assets/images/post/post-2.jpg",
        title: "महामृत्युंजय मंत्र",
        itemKey: "MahaMrityunjayaMantra",
        routeUrl: `/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
        // routeUrl: `/${Categories[Categories.Mantras]}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
      },

      // {
      //   category: Categories.Mantras,
      //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
      //   imgUrl: "/assets/images/post/post-2.jpg",
      //   routeUrl: `/${AppStrings.Mantras}/RudraMantra/${Languages[Languages.Sanskrit]}`,
      //   title: "RudraMantra",
      //   itemKey: "RudraMantra"
      // },
      // {
      //   category: Categories.Mantras,
      //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
      //   imgUrl: "/assets/images/post/post-3.jpg",
      //   routeUrl: `/${AppStrings.Mantras}/ShivDhyaanaMantra/${Languages[Languages.Sanskrit]}`,
      //   title: "ShivDhyaanaMantra",
      //   itemKey: "ShivDhyaanaMantra"
      // },
      // {
      //   category: Categories.Mantras,
      //   availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
      //   imgUrl: "/assets/images/post/post-1.jpg",
      //   routeUrl: `/${AppStrings.Mantras}/PanchakshariMantra/${Languages[Languages.Sanskrit]}`,
      //   title: "PanchakshariMantra",
      //   itemKey: "Panchakshari Mantra"
      // },
    ];


    return of(categoryCardInfo);
  }

  getJyortilingsCategoryCardInfo(): Observable<CategoryCardInfo[]> {

    let categoryCardInfo: CategoryCardInfo[] = [
      {
        category: CategoryEnum.Jyortilingas12,
        availableLanguages: [Languages.Hindi, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-1.jpg",
        routeUrl: `/SomnathJyortiling/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${AppStrings.Jyortilingas12}/SomnathJyortiling/${Languages[Languages.Sanskrit]}`,
        title: "Somnath Jyortiling",
        itemKey: "SomnathJyortiling"
      },
      {
        category: CategoryEnum.Jyortilingas12,
        availableLanguages: [Languages.Hindi, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-2.jpg",
        routeUrl: `/MallikarjunJyortiling/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${AppStrings.Jyortilingas12}/MallikarjunJyortiling/${Languages[Languages.Sanskrit]}`,
        title: "Mallikarjun Jyortiling",
        itemKey: "MallikarjunJyortiling"
      },
      {
        category: CategoryEnum.Jyortilingas12,
        availableLanguages: [Languages.Hindi, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-3.jpg",
        routeUrl: `/KedarnathJyortiling/${Languages[Languages.Sanskrit]}`,
        // routeUrl: `/${AppStrings.Jyortilingas12}/KedarnathJyortiling/${Languages[Languages.Sanskrit]}`,
        title: "Kedarnath Jyortiling",
        itemKey: "KedarnathJyortiling"
      },

    ];


    return of(categoryCardInfo);
  }
  


}
