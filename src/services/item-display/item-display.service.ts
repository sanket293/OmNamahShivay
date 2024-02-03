import { Injectable } from '@angular/core';
import { Categories } from '../../enums/categories.enum';
import { ItemDisplay } from '../../model/item-display.model';
import { Observable, of } from 'rxjs';
import { Languages } from '../../enums/languages.enum';
import { ItemProperty } from '../../model/ItemProperty.model';
import { Auther } from '../../model/auther.model';
import { ItemLanguageTag } from '../../model/item-language-tag.model';

@Injectable({
  providedIn: 'root'
})

export class ItemDisplayService {

  constructor() { }

  getItemDisplayDetails(category: string, itemKey: string, language: string): Observable<ItemDisplay> {

    let itemDisplay: ItemDisplay = {
      auther: this.getAuther(category, itemKey),
      availableInLanguages: this.getItemLanguageTags(category, itemKey),
      currentItemLanguage: language,
      markDownContantUrl: `/data/${category}/${itemKey}/${itemKey}-${language}.md`,
      posterUrl: "/assets/images/post/post-2.jpg",
      timeToRead: "7 Min To Read",
      title: itemKey
    };

    return of(itemDisplay);
  }

  getAuther(category: string, itemKey: string): Auther {

    return {
      autherPageUrl: "/assets/images/john-doe.jpg",
      authorImageUrl: "/assets/images/john-doe.jpg",
      authorName: 'Ved Vyas',
    }

  }

  getItemLanguageTags(category: string, itemKey: string): ItemLanguageTag[] {

    var itemLanguageTags: ItemLanguageTag[] = [
      {
        name: Languages[Languages.Sanskrit],
        routeUrl: `/${category}/${itemKey}/${Languages[Languages.Sanskrit]}`
      },
      {
        name: Languages[Languages.Hindi],
        routeUrl: `/${category}/${itemKey}/${Languages[Languages.Hindi]}`
      },
      {
        name: Languages[Languages.Gujarati],
        routeUrl: `/${category}/${itemKey}/${Languages[Languages.Gujarati]}`
      },
    ];
    return itemLanguageTags;
  }

}




//     let markDownContantUrl = `/data/${Categories[Categories.Stuties]}/${stutiKey}/${stutiKey}-${language}.md`;
// stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
// stutieLanguage: string = "Shiv Mahimna Strotam"

// authorName: string = "Sanket Vagadiya";
// authorImageUrl: String = "/assets/images/john-doe.jpg";

// timeToRead: string = "7 Min To Read";

// stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
// currentStutieLanguage: string = "Sanskrit";
