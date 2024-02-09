import { Injectable } from '@angular/core';
import { ItemDisplay } from '../../model/item-display.model';
import { Observable, of } from 'rxjs';
import { Languages } from '../../enums/languages.enum';
import { Auther } from '../../model/auther.model';
import { ItemLanguageTag } from '../../model/item-language-tag.model';
import { CategoryEnum } from '../../enums/category-enum.enum';

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
      posterUrl: this.getItemPosterUrl(category),
      timeToRead: "7 Min To Read",
      title: this.getTitle(category, itemKey)
    };

    return of(itemDisplay);
  }

  getTitle(category: string, itemKey: string): string {
    if (category === CategoryEnum[CategoryEnum.Stuties]) {
      return "श्री शिवमहिम्नस्तोत्रम्";
    }
    return "श्री शिव चालीसा";
  }

  

  getAuther(category: string, itemKey: string): Auther {
    //TODO: get Auther details from API

    if (category === CategoryEnum[CategoryEnum.Stuties]) {
      return {
        autherPageUrl: "/assets/images/john-doe.jpg",
        authorImageUrl: "/assets/images/john-doe.jpg",
        authorName: 'Gandharva Pushpadant',
      }
    }
    // return "श्री शिव चालीसा";
    return {
      autherPageUrl: "/assets/images/john-doe.jpg",
      authorImageUrl: "/assets/images/john-doe.jpg",
      authorName: 'Ayodhya Das',
    }

  }

  getItemLanguageTags(category: string, itemKey: string): ItemLanguageTag[] {
    //TODO: get tags from API
    var itemLanguageTags: ItemLanguageTag[] = [
      {
        name: Languages[Languages.Sanskrit],
        routeUrl: `/CategoryList/${category}/${itemKey}/${Languages[Languages.Sanskrit]}`
      },
      // {
      //   name: Languages[Languages.Hindi],
      //   routeUrl: `/CategoryList/${category}/${itemKey}/${Languages[Languages.Hindi]}`
      // },
      // {
      //   name: Languages[Languages.Gujarati],
      //   routeUrl: `/CategoryList/${category}/${itemKey}/${Languages[Languages.Gujarati]}`
      // },
    ];
    return itemLanguageTags;
  }

  getItemPosterUrl(category: string): string {
    //TODO: get Image Poster Url from API
    if (category === CategoryEnum[CategoryEnum.Stuties]) {
      return "/assets/images/post/post-1.jpg";
    }
    return "/assets/images/post/post-2.jpg";
  }

}
