import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from '../../enums/categories.enum';
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
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "शिवमहिम्न:स्तोत्र",
        itemkey: "ShivMahimnaStotam",
        routeUrl: `/${Categories[Categories.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "श्री शिव रुद्राष्टकम स्तोत्रम",
        itemkey: "Rudrashtakam",
        routeUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.ShivChalisa,
        language: Languages.Sanskrit,
        name: "श्री शिव चालीसा",
        itemkey: "ShivChalisa",
        routeUrl: `/${AppStrings.ShivChalisa}/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Mantras,
        language: Languages.Sanskrit,
        name: "महामृत्युंजय मंत्र",
        itemkey: "MahaMrityunjayaMantra",
        routeUrl: `/${Categories[Categories.Mantras]}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Status,
        language: Languages.English,
        name: "Mahakal Attitude Status",
        itemkey: "Status",
        routeUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`
      },
      {
        category: Categories.ShivNames1000,
        language: Languages.English,
        name: "1000 Names of Lord Shiva",
        itemkey: "ShivaNames1000",
        routeUrl: `/${AppStrings.Names1000}/${Languages[Languages.English]}`
      },
    ];

    return of(tags);
  }

  getSideNavTags(): Observable<ItemProperty[]> {
    
    let tags: ItemProperty[] = [
      {
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "शिवमहिम्न:स्तोत्र",
        itemkey: "ShivMahimnaStotam",
        routeUrl: `/${Categories[Categories.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "लिंगाष्टकम स्तोत्र",
        itemkey: "Lingashtakam",
        routeUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Stuties,
        language: Languages.Sanskrit,
        name: "श्री शिव रुद्राष्टकम स्तोत्रम",
        itemkey: "Rudrashtakam",
        routeUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.ShivChalisa,
        language: Languages.Sanskrit,
        name: "श्री शिव चालीसा",
        itemkey: "ShivChalisa",
        routeUrl: `/${Categories[Categories.ShivChalisa]}/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Mantras,
        language: Languages.Sanskrit,
        name: "महामृत्युंजय मंत्र",
        itemkey: "MahaMrityunjayaMantra",
        routeUrl: `/${Categories[Categories.Mantras]}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`
      },
      {
        category: Categories.Status,
        language: Languages.English,
        name: "Mahakal Attitude Status",
        itemkey: "Status",
        routeUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`
      },
      {
        category: Categories.ShivNames1000,
        language: Languages.English,
        name: "1000 Names of Lord Shiva",
        itemkey: "ShivaNames1000",
        routeUrl: `/${Categories[Categories.ShivNames1000]}/${Languages[Languages.English]}`
      },
      {
        category: Categories.ShivNames108,
        language: Languages.English,
        name: "108 Names of Lord Shiva",
        itemkey: "ShivaNames108",
        routeUrl: `/${Categories[Categories.ShivNames108]}/${Languages[Languages.English]}`
      },
    ];

    return of(tags);
  }

}
