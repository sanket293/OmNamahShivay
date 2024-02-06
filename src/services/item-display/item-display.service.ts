import { Injectable } from '@angular/core'; 
import { ItemDisplay } from '../../model/item-display.model';
import { Observable, of } from 'rxjs';
import { Languages } from '../../enums/languages.enum';
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
      markDownContantUrl: `/data/CategoryListItem/${category}/${itemKey}/${itemKey}-${language}.md`,
      posterUrl: this.getItemPosterUrl(),
      timeToRead: "7 Min To Read",
      title: itemKey
    };

    return of(itemDisplay);
  }

  getAuther(category: string, itemKey: string): Auther {
    //TODO: get Auther details from API

    return {
      autherPageUrl: "/assets/images/john-doe.jpg",
      authorImageUrl: "/assets/images/john-doe.jpg",
      authorName: 'Ved Vyas',
    }

  }

  getItemLanguageTags(category: string, itemKey: string): ItemLanguageTag[] {
    //TODO: get tags from API
    var itemLanguageTags: ItemLanguageTag[] = [
      {
        name: Languages[Languages.Sanskrit],
        // routeUrl: `/${itemKey}/${Languages[Languages.Sanskrit]}`
        routeUrl: `/CategoryList/${category}/${itemKey}/${Languages[Languages.Sanskrit]}`
      },
      {
        name: Languages[Languages.Hindi],
        // routeUrl: `/${itemKey}/${Languages[Languages.Hindi]}`
        routeUrl: `/CategoryList/${category}/${itemKey}/${Languages[Languages.Hindi]}`
      },
      {
        name: Languages[Languages.Gujarati],
        // routeUrl: `/${itemKey}/${Languages[Languages.Gujarati]}`
        routeUrl: `/CategoryList/${category}/${itemKey}/${Languages[Languages.Gujarati]}`
      },
    ];
    return itemLanguageTags;
  }

  getItemPosterUrl(): string {
        //TODO: get Image Poster Url from API
    return "/assets/images/post/post-2.jpg";
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
