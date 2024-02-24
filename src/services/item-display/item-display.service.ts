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
      posterUrl: this.getItemPosterUrl(category, itemKey),
      timeToRead: "7 Min To Read",
      title: this.getTitle(category, itemKey)
    };

    return of(itemDisplay);
  }

  getTitle(category: string, itemKey: string): string {
    if (category === CategoryEnum[CategoryEnum.Stuties]) {

      if (itemKey === "ShivMahimnaStotam")
        return "श्री शिवमहिम्नस्तोत्रम्";
    }

    if (category === CategoryEnum[CategoryEnum.Ashtaks]) {
      if (itemKey === "Lingashtakam")
        return "लिंगाष्टकम स्तोत्र";

      if (itemKey === "Bilvashtakam")
        return "बिल्वाश्टकम पाठ";
    }

    if (category === CategoryEnum[CategoryEnum.ShivPooja]) {
      if (itemKey === "ShivManasPooja")
        return "शिव मानस पूजा";
    }

    return "श्री शिव चालीसा";
  }

  getAuther(category: string, itemKey: string): Auther {
    //TODO: get Auther details from API

    if (category === CategoryEnum[CategoryEnum.Stuties]) {
      if (itemKey === "ShivMahimnaStotam")
        return {
          autherPageUrl: "/assets/images/shivay1.png",
          authorImageUrl: "/assets/images/shivay1.png",
          authorName: 'Gandharva Pushpadant',
        }
    }

    if (category === CategoryEnum[CategoryEnum.Ashtaks]) {
      if (itemKey === "Bilvashtakam")
        return {
          autherPageUrl: "/assets/images/shivay1.png",
          authorImageUrl: "/assets/images/shivay1.png",
          authorName: 'Adi Shankaracharya',
        }
      if (itemKey === "Lingashtakam")
        return {
          autherPageUrl: "/assets/images/shivay1.png",
          authorImageUrl: "/assets/images/auther/adi-shankara.jpg",
          authorName: 'Adi Shankaracharya',
        }
    }

    if (category === CategoryEnum[CategoryEnum.ShivPooja]) {

      if (itemKey === "ShivManasPooja")
        return {
          autherPageUrl: "/assets/images/shivay1.png",
          authorImageUrl: "/assets/images/auther/adi-shankara.jpg",
          authorName: 'Adi Shankaracharya',
        }
    }

    // return "श्री शिव चालीसा";
    return {
      autherPageUrl: "/assets/images/shivay1.png",
      authorImageUrl: "/assets/images/shivay1.png",
      authorName: 'Ayodhya Das',
    }

  }
  
  getItemPosterUrl(category: string, itemKey: string): string {
    //TODO: get Image Poster Url from API
    if (category === CategoryEnum[CategoryEnum.Stuties]) {
      if (itemKey === "ShivMahimnaStotam")
        return "/assets/images/categories/stuties/ShivMahimnaStotam.png";
    }
    if (category === CategoryEnum[CategoryEnum.Ashtaks]) {
      if (itemKey === "Bilvashtakam")
        return "/assets/images/categories/ashtaks/Bilvashtakam.png";
      if (itemKey === "Lingashtakam")
        return "/assets/images/categories/ashtaks/Lingashtakam.png";
    }
    if (category === CategoryEnum[CategoryEnum.ShivPooja]) {
      if (itemKey === "ShivManasPooja")
        return "/assets/images/categories/shiv-pooja/ShivManasPooja.png";

    }
    return "/assets/images/categories/ShivChalisa.png";
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

}
