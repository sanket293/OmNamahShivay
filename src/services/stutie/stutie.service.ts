import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from '../../enums/categories.enum';
import { Languages } from '../../enums/languages.enum'; 
import { CategoryCardInfo } from '../../model/category-card-info.model';

@Injectable({
  providedIn: 'root'
})
export class StutieService {

  constructor() { }

  getStutiecategoryCardInfo(): Observable<CategoryCardInfo[]> {

    let stutieInfo: CategoryCardInfo[] = [
      {
        category: Categories.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Gujarati, Languages.English],
        imgUrl: "/assets/images/post/post-1.jpg",
        routeUrl: `/${Categories[Categories.Stuties]}/ShivMahimnaStotam/${Languages[Languages.Sanskrit]}`,
        title: "श्री शिवमहिम्नस्तोत्रम्‌",
        itemKey: "ShivMahimnaStotam"
      },
      {
        category: Categories.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Hindi, Languages.Gujarati],
        imgUrl: "/assets/images/post/post-2.jpg",
        routeUrl: `/${Categories[Categories.Stuties]}/Rudrashtakam/${Languages[Languages.Sanskrit]}`,
        title: "शिव रुद्राष्टकम",
        itemKey: "Rudrashtakam"
      },
      {
        category: Categories.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Telugu, Languages.Gujarati],
        imgUrl: "/assets/images/post/post-3.jpg",
        routeUrl: `/${Categories[Categories.Stuties]}/Lingashtakam/${Languages[Languages.Sanskrit]}`,
        title: "लिंगाष्टकम स्तोत्र",
        itemKey: "Lingashtakam"
      },
      {
        category: Categories.Stuties,
        availableLanguages: [Languages.Sanskrit, Languages.Kannad, Languages.Malyalam],
        imgUrl: "/assets/images/post/post-1.jpg",
        routeUrl: `/${Categories[Categories.Stuties]}/Shivashtakam/${Languages[Languages.Sanskrit]}`,
        title: "श्री शिवाष्टकं",
        itemKey: "Shivashtakam"
      },
    ];

    return of(stutieInfo);
  }
  
  // stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
  // stutieLanguage: string = "Shiv Mahimna Strotam"

  // authorName: string = "Sanket Vagadiya";
  // authorImageUrl: String = "/assets/images/john-doe.jpg";

  // timeToRead: string = "7 Min To Read";

  // stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
  // currentStutieLanguage: string = "Sanskrit";


}

