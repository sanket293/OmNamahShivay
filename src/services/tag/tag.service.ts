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
        routeUrl: `/${AppStrings.Stuties}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Stuties,
        language: Languages.Sanskrit,
        name: "श्री शिव रुद्राष्टकम स्तोत्रम",
        itemKey: "Rudrashtakam",
        routeUrl: `/${AppStrings.Stuties}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.ShivChalisa,
        language: Languages.Sanskrit,
        name: "श्री शिव चालीसा",
        itemKey: "ShivChalisa",
        routeUrl: `/${AppStrings.ShivChalisa}/ShivChalisa/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Mantras,
        language: Languages.Sanskrit,
        name: "महामृत्युंजय मंत्र",
        itemKey: "MahaMrityunjayaMantra",
        routeUrl: `/${AppStrings.Mantras}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
      },
      // {
      //   category: Categories.Status,
      //   language: Languages.English,
      //   name: "Mahakal Attitude Status",
      //   itemkey: "Status",
      //   routeUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`
      // },
      {
        category: CategoryEnum.ShivNames1000,
        language: Languages.English,
        name: "1000 Names of Lord Shiva",
        itemKey: "ShivaNames1000",
        routeUrl: `/${AppStrings.ShivNames1000}/${Languages[Languages.English]}`
      },
    ];

    return of(tags);
  }

  getSideNavTags(): Observable<ItemProperty[]> {

    let tags: ItemProperty[] = [
      {
        category: CategoryEnum.Stuties,
        language: Languages.Sanskrit,
        name: "शिवमहिम्न:स्तोत्र",
        itemKey: "ShivMahimnaStotam",
        routeUrl: `/${CategoryEnum[CategoryEnum.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Stuties,
        language: Languages.Sanskrit,
        name: "लिंगाष्टकम स्तोत्र",
        itemKey: "Lingashtakam",
        routeUrl: `/${CategoryEnum[CategoryEnum.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Stuties,
        language: Languages.Sanskrit,
        name: "श्री शिव रुद्राष्टकम स्तोत्रम",
        itemKey: "Rudrashtakam",
        routeUrl: `/${CategoryEnum[CategoryEnum.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.ShivChalisa,
        language: Languages.Sanskrit,
        name: "श्री शिव चालीसा",
        itemKey: "ShivChalisa",
        routeUrl: `/${CategoryEnum[CategoryEnum.ShivChalisa]}/ShivChalisa/${Languages[Languages.Sanskrit]}`
      },
      {
        category: CategoryEnum.Mantras,
        language: Languages.Sanskrit,
        name: "महामृत्युंजय मंत्र",
        itemKey: "MahaMrityunjayaMantra",
        routeUrl: `/${CategoryEnum[CategoryEnum.Mantras]}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
      },
      // {
      //   category: Categories.Status,
      //   language: Languages.English,
      //   name: "Mahakal Attitude Status",
      //   itemkey: "Status",
      //   routeUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`
      // },
      {
        category: CategoryEnum.ShivNames1000,
        language: Languages.English,
        name: "1000 Names of Lord Shiva",
        itemKey: "ShivaNames1000",
        routeUrl: `/${AppStrings.ShivNames1000}/${Languages[Languages.English]}`
      },
      {
        category: CategoryEnum.ShivNames108,
        language: Languages.English,
        name: "108 Names of Lord Shiva",
        itemKey: "ShivaNames108",
        routeUrl: `/${AppStrings.ShivNames108}/${Languages[Languages.English]}`
      },
      {
        category: CategoryEnum.Jyortilingas12,
        language: Languages.English,
        name: "Somnath Mahadev",
        itemKey: "SomnathJyortiling",
        routeUrl: `/${AppStrings.Jyortilingas12}/SomnathJyortiling/${Languages[Languages.English]}`
      },

    ];

    return of(tags);
  }

}
