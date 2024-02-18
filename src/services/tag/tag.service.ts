import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryEnum } from '../../enums/category-enum.enum';
import { Languages } from '../../enums/languages.enum';
import { ItemProperty } from '../../model/ItemProperty.model';
import { AppStrings } from '../../constants/appstrings.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  getHomeBannerTags(): Observable<ItemProperty[]> {
    //Can I add perma link?

    let tags: ItemProperty[] = [
      {
        category: CategoryEnum.Stuties,
        language: Languages.Sanskrit,
        name: "शिवमहिम्न:स्तोत्र",
        itemKey: "ShivMahimnaStotam",
        routeUrl: `/CategoryList/${AppStrings.Stuties}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Ashtaks,
        language: Languages.Sanskrit,
        name: "लिंगाष्टकम स्तोत्र",
        itemKey: "Lingashtakam",
        routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Ashtaks]}/Lingashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Ashtaks,
        language: Languages.Sanskrit,
        name: "बिल्वाश्टकम पाठ",
        itemKey: "Bilvashtakam",
        routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Ashtaks]}/Bilvashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.ShivChalisa,
        language: Languages.Sanskrit,
        name: "श्री शिव चालीसा",
        itemKey: "ShivChalisa",
        routeUrl: `/CategoryList/${AppStrings.ShivChalisa}/ShivChalisa/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.ShivPooja,
        language: Languages.Sanskrit,
        name: "शिव मानस पूजा",
        itemKey: "ShivManasPooja",
        routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.ShivPooja]}/ShivManasPooja/${Languages[Languages.Sanskrit]}`
      },
      // {
      //   category: CategoryEnum.Stuties,
      //   language: Languages.Sanskrit,
      //   name: "श्री शिव रुद्राष्टकम स्तोत्रम",
      //   itemKey: "Rudrashtakam",
      //   routeUrl: `/CategoryList/${AppStrings.Stuties}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      // },
      // {
      //   category: CategoryEnum.Mantras,
      //   language: Languages.Sanskrit,
      //   name: "महामृत्युंजय मंत्र",
      //   itemKey: "MahaMrityunjayaMantra",
      //   routeUrl: `/CategoryList/${AppStrings.Mantras}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
      // },
      // {
      //   category: Categories.Status,
      //   language: Languages.English,
      //   name: "Mahakal Attitude Status",
      //   itemkey: "Status",
      //   routeUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`
      // },
      // {
      //   category: CategoryEnum.ShivNames1000,
      //   language: Languages.English,
      //   name: "1000 Names of Lord Shiva",
      //   itemKey: "ShivaNames1000",
      //   routeUrl: `/CategoryList/${AppStrings.ShivNames1000}/${Languages[Languages.English]}`
      // },
    ];

    return of(tags);
  }


  //TODO: get these from API
  //Get languageEnum
  //Get categoryEnum
  getSideNavTags(tagType: string): Observable<ItemProperty[]> {
    //TODO: remove ItemProperty and just send link and value(in short whateveery is necessary)
    if (tagType = "CategoryEnum") {
      return of([
        {
          category: CategoryEnum.Stuties,
          language: Languages.Sanskrit,
          name: "Stuties",
          itemKey: "ShivMahimnaStotam",
          routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
        },
        {
          category: CategoryEnum.Stuties,
          language: Languages.Sanskrit,
          name: "Mantras",
          itemKey: "ShivMahimnaStotam",
          routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
        },
        {
          category: CategoryEnum.Stuties,
          language: Languages.Sanskrit,
          name: "Ashtasks",
          itemKey: "ShivMahimnaStotam",
          routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
        },
      ]);
    } else if ("LanguageEnum") {

      return of([
        {
          category: CategoryEnum.Stuties,
          language: Languages.Sanskrit,
          name: "Sanskrit",
          itemKey: "ShivMahimnaStotam",
          routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
        },
        {
          category: CategoryEnum.Stuties,
          language: Languages.Sanskrit,
          name: "Hindi",
          itemKey: "ShivMahimnaStotam",
          routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
        },
        {
          category: CategoryEnum.Stuties,
          language: Languages.Sanskrit,
          name: "English",
          itemKey: "ShivMahimnaStotam",
          routeUrl: `/CategoryList/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
        },
      ]);
    }
    return of([]);
  }

}
