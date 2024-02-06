import { Component, OnInit } from '@angular/core';
import { RecentPostComponent } from "../../post/recent-post/recent-post.component";
import { CommonModule } from '@angular/common';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CategoryEnum } from '../../../enums/category-enum.enum';
import { ItemDisplayService } from '../../../services/item-display/item-display.service';
import { ItemDisplay } from '../../../model/item-display.model';
import { Observable, tap } from 'rxjs';
import { LanguageTagsComponent } from "../language-tags/language-tags.component";

@Component({
  selector: 'app-item-display',
  standalone: true,
  templateUrl: './item-display.component.html',
  styleUrl: './item-display.component.css',
  imports: [CommonModule, RecentPostComponent, MarkdownComponent, LanguageTagsComponent, RouterModule]
})
export class ItemDisplayComponent implements OnInit{
  itemDisplay: ItemDisplay | undefined;
  markdown$: Observable<string> | undefined;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private mdService: MarkdownService,
    private itemDisplayService: ItemDisplayService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((routeParameters) => {

      let category = this.activatedRoute.routeConfig?.path?.split("/")?.[0];
      if (!category) {
        this.router.navigate(["home"]);
        return;
      }

      let itemKey = routeParameters.get('itemKey') ?? "";
      let language = routeParameters.get('language') ?? "";

      console.log(JSON.stringify(routeParameters));

      this.itemDisplayService.getItemDisplayDetails(category, itemKey, language).subscribe((itemDisplay: ItemDisplay) => {

        console.log(JSON.stringify(itemDisplay));

        this.itemDisplay = itemDisplay;
        this.markdown$ = this.mdService.getSource(this.itemDisplay.markDownContantUrl);

      });

    });
  }

}
// itemPosterUrl: string = '/assets/images/post/post-2.jpg';
// itemTitle: string = 'Item Title';
// itemTimeToRead: string = '2 mins';
// itemLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
// currentItemLanguage: string = "Sanskrit";

// autherPageUrl: string = '#';
// authorName: string = 'Ved Vyas'
// authorImageUrl: any;


// this.itemTitle = stutiKey?.toString() ?? ""; //get this from api
// let markDownContantUrl = `/data/${Categories[Categories.Stuties]}/${stutiKey}/${stutiKey}-${language}.md`;
// this.markdown$ = this.mdService.getSource(markDownContantUrl); //TODO: get markdown value form API
