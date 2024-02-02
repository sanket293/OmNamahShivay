import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemProperty } from '../../model/ItemProperty.model';
import { Categories } from '../../enums/categories.enum';
import { Languages } from '../../enums/languages.enum';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHomeBannerTags(): Observable<ItemProperty[]> {

    //Can I add perma link?

    let tags: ItemProperty[] = [
      {
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "शिवमहिम्न:स्तोत्र",
        key: "ShivMahimnaStotam",
        routeUrl: `/${Categories[Categories.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "श्री शिव रुद्राष्टकम स्तोत्रम",
        key: "Rudrashtakam",
        routeUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      {
        category: Categories.ShivChalisa,
        language: Languages.Sanskrit,
        name: "श्री शिव चालीसा",
        key: "ShivChalisa",
        routeUrl: `/${Categories[Categories.ShivChalisa]}/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      {
        category: Categories.Mantras,
        language: Languages.Sanskrit,
        name: "महामृत्युंजय मंत्र",
        key: "MahaMrityunjayaMantra",
        routeUrl: `/${Categories[Categories.Mantras]}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      // {
      //   tagCategory: Categories.Status,
      //   tagLanguage: Languages.English,
      //   tagName: "Mahakal Attitude Status",
      //   tagValue: "Status",
      //   tagUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`.toLowerCase()
      // },
      {
        category: Categories.ShivNames1000,
        language: Languages.English,
        name: "1000 Names of Lord Shiva",
        key: "ShivaNames1000",
        routeUrl: `/${Categories[Categories.ShivNames1000]}/${Languages[Languages.English]}`.toLowerCase()
      },
    ];

    return of(tags);

  }


}
