import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RecentPostComponent } from "../../shared/recent-post/recent-post.component";
import { Observable, map, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QueryParamsItem } from '../../../model/query-params.model';
import { HttpClient } from '@angular/common/http';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { Categories } from '../../../enums/categories.enum';
import { Languages } from '../../../enums/languages.enum';
import { ItemProperty } from '../../../model/ItemProperty.model';


@Component({
  selector: 'app-stuties',
  standalone: true,
  templateUrl: './stuties.component.html',
  styleUrl: './stuties.component.css',

  imports: [CommonModule, RecentPostComponent, MarkdownComponent],

})
export class StutiesComponent implements OnInit {
  markdown$: any;

  constructor(public activatedRoute: ActivatedRoute, private http: HttpClient, private mdService: MarkdownService,) { }

  // state$!: Observable<QueryParamsItem>;

  stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
  stutieLanguage: string = "Shiv Mahimna Strotam"

  authorName: string = "Sanket Vagadiya";
  authorImageUrl: String = "/assets/images/john-doe.jpg";

  timeToRead: string = "7 Min To Read";

  stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
  currentStutieLanguage: string = "Sanskrit";

  stutieContent: string = `
  ॥ ॐ नमः शिवाय॥    
  ॥ अथ श्री शिवमहिम्नस्तोत्रम्‌॥
\n
  महिम्नः पारं ते परमविदुषो यद्यसदृशी
  
  स्तुतिर्ब्रह्मादीनामपि तदवसन्नास्त्वयि गिरः ।
  
  अथाऽवाच्यः सर्वः स्वमतिपरिणामावधि गृणन्‌
  
  ममाप्येष स्तोत्रे हर निरपवादः परिकरः॥ १॥`;



  currentRoute: any = "";



  ngOnInit() {

    // this.currentRoute = this.activatedRoute.paramMap;
    // this.currentRoute = this.activatedRoute.paramMap;

    this.activatedRoute.paramMap.subscribe((routeParameters) => {
      let stutiKey = routeParameters.get('stutiKey');
      let language = routeParameters.get('language');

      console.log(stutiKey);
      console.log(language);

      let markDownContantUrl = `/data/${Categories[Categories.Stuties]}/${stutiKey}/${stutiKey}-${language}.md`;
      console.log(markDownContantUrl);
      this.markdown$ = this.mdService.getSource(markDownContantUrl); //TODO: get markdown value form API

    });



    // this.activatedRoute.paramMap.pipe(
    //   tap((routeParameters) => {

    //     let stutiKey = routeParameters.get('stutiKey');
    //     let language = routeParameters.get('language');

    //     let markDownContantUrl = `/data/${Categories[Categories.Stuties]}/${stutiKey}/${stutiKey}-${language}.md`;
    //     console.log(markDownContantUrl);
    //     this.markdown$ = this.mdService.getSource(markDownContantUrl); //TODO: get markdown value form API

    //   }),

    // );





    // this.activatedRoute.parent

    // console.log();

    // this.activatedRoute.paramMap.subscribe(
    //   (params: ParamMap) => {
    //     // this.currentLang = params.get('lang');
    //   }
    // )

    // console.log(JSON.stringify(this.activatedRoute.params));

    // this.state$ = this.activatedRoute.paramMap
    //   .pipe(map(() => window.history.state)

    //     , tap(async (query: QueryParamsItem) => {

    //       // console.log(JSON.stringify(query));

    //       // let markDownContantUrl = `/data/${Categories[+query.item.category]}/${query.item.key}/${query.item.key}-${Languages[+query.item.language]}.md`;
    //       // console.log(markDownContantUrl);

    //       // this.markdown$ = this.mdService.getSource(markDownContantUrl); //TODO: get markdown value form API

    //     })
    //   );
  }

}
