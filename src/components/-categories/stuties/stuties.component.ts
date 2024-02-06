import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RecentPostComponent } from "../../post/recent-post/recent-post.component";
import { Observable, map, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { CategoryEnum } from '../../../enums/category-enum.enum';
import { ItemDisplayComponent } from "../../shared/item-display/item-display.component";


@Component({
    selector: 'app-stuties',
    standalone: true,
    templateUrl: './stuties.component.html',
    styleUrl: './stuties.component.css',
    imports: [CommonModule, RecentPostComponent, MarkdownComponent, ItemDisplayComponent]
})
export class StutiesComponent implements OnInit {
  // markdown$: any;

  constructor(public activatedRoute: ActivatedRoute, private mdService: MarkdownService) { }

  // stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
  // stutieLanguage: string = "Shiv Mahimna Strotam"

  // authorName: string = "Sanket Vagadiya";
  // authorImageUrl: String = "/assets/images/john-doe.jpg";

  // timeToRead: string = "7 Min To Read";

  // stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
  // currentStutieLanguage: string = "Sanskrit";


  ngOnInit() {

    // this.activatedRoute.paramMap.subscribe((routeParameters) => {

    //   let stutiKey = routeParameters.get('stutiKey');
    //   let language = routeParameters.get('language');

    //   this.stutieLanguage = stutiKey?.toString() ?? "";

    //   let markDownContantUrl = `/data/${Categories[Categories.Stuties]}/${stutiKey}/${stutiKey}-${language}.md`;
    //   this.markdown$ = this.mdService.getSource(markDownContantUrl); //TODO: get markdown value form API

    // });


  }

}


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