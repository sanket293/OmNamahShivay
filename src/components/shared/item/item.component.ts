import { Component } from '@angular/core';
import { RecentPostComponent } from "../recent-post/recent-post.component";
import { CommonModule } from '@angular/common';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../../../enums/categories.enum';
import { ItemDisplayService } from '../../../services/item-display/item-display.service';
import { ItemDisplay } from '../../../model/item-display.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  imports: [CommonModule, RecentPostComponent, MarkdownComponent],
})
export class ItemComponent {


  itemDisplay: ItemDisplay | undefined;
  markdown$: Observable<string> | undefined;

  constructor(public activatedRoute: ActivatedRoute, private mdService: MarkdownService,
    private itemDisplayService: ItemDisplayService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((routeParameters) => {

      let stutiKey = routeParameters.get('stutiKey') ?? "";
      let language = routeParameters.get('language') ?? "";

      console.log(JSON.stringify(routeParameters));

      this.itemDisplayService.getItemDisplayDetails(Categories.Stuties, stutiKey, language).subscribe((itemDisplay: ItemDisplay) => {

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
