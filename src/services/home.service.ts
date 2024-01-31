import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tag } from '../model/tag.model';
import { Categories } from '../enums/categories.enum';
import { Languages } from '../enums/languages.enum';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHomeBannerTags(): Observable<Tag[]> {

    //Can I add perma link?

    let tags: Tag[] = [
      {
        tagCategory: Categories.Stuties,
        tagLanguage: Languages.Sanskrit,
        tagName: "शिवमहिम्न:स्तोत्र",
        tagValue: "ShivMahimnaStotam",
        tagUrl: `/${Categories[Categories.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      {
        tagCategory: Categories.Stuties,
        tagLanguage: Languages.Sanskrit,
        tagName: "श्री शिव रुद्राष्टकम स्तोत्रम",
        tagValue: "Rudrashtakam",
        tagUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      {
        tagCategory: Categories.ShivChalisa,
        tagLanguage: Languages.Sanskrit,
        tagName: "श्री शिव चालीसा",
        tagValue: "ShivChalisa",
        tagUrl: `/${Categories[Categories.ShivChalisa]}/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      {
        tagCategory: Categories.Mantra,
        tagLanguage: Languages.Sanskrit,
        tagName: "महामृत्युंजय मंत्र",
        tagValue: "MahaMrityunjayaMantra",
        tagUrl: `/${Categories[Categories.Mantra]}/MahaMrityunjayaMantra/${Languages[Languages.Sanskrit]}`.toLowerCase()
      },
      // {
      //   tagCategory: Categories.Status,
      //   tagLanguage: Languages.English,
      //   tagName: "Mahakal Attitude Status",
      //   tagValue: "Status",
      //   tagUrl: `/${Categories[Categories.Status]}/MahakalAttitudeStatus/${Languages[Languages.English]}`.toLowerCase()
      // },
      {
        tagCategory: Categories.ShivNames1000,
        tagLanguage: Languages.English,
        tagName: "1000 Names of Lord Shiva",
        tagValue: "ShivaNames1000",
        tagUrl: `/${Categories[Categories.ShivNames1000]}/${Languages[Languages.English]}`.toLowerCase()
      },
    ];

    return of(tags);

  }


}
