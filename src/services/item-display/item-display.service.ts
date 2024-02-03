import { Injectable } from '@angular/core';
import { Categories } from '../../enums/categories.enum';
import { ItemDisplay } from '../../model/item-display.model';
import { Observable, of } from 'rxjs';
import { Languages } from '../../enums/languages.enum';
import { ItemProperty } from '../../model/ItemProperty.model';
import { Auther } from '../../model/auther.model';

@Injectable({
  providedIn: 'root'
})

export class ItemDisplayService {

  getItemDisplayDetails(categoryId: Categories, itemKey: string, language: string): Observable<ItemDisplay> {

    let itemDisplay: ItemDisplay = {
      auther: this.getAuther(),
      availableInLanguages: [Languages[Languages.Sanskrit], Languages[Languages.Gujarati]],
      currentItemLanguage: language,
      markDownContantUrl: `/data/${Categories[categoryId]}/${itemKey}/${itemKey}-${language}.md`,
      posterUrl: "/assets/images/post/post-2.jpg",
      timeToRead: "7 Min To Read",
      title: itemKey
    };

    return of(itemDisplay);
  }

  getAuther(): Auther {

    return {
      autherPageUrl: "/assets/images/john-doe.jpg",
      authorImageUrl: "/assets/images/john-doe.jpg",
      authorName: 'Ved Vyas',
    }

  }

 

  constructor() { }
}

//     let markDownContantUrl = `/data/${Categories[Categories.Stuties]}/${stutiKey}/${stutiKey}-${language}.md`;
// stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
// stutieLanguage: string = "Shiv Mahimna Strotam"

// authorName: string = "Sanket Vagadiya";
// authorImageUrl: String = "/assets/images/john-doe.jpg";

// timeToRead: string = "7 Min To Read";

// stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
// currentStutieLanguage: string = "Sanskrit";
