import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { RecentPostComponent } from '../../post/recent-post/recent-post.component';
import { LanguageTagsComponent } from '../../shared/language-tags/language-tags.component';
import { Observable } from 'rxjs';
import { ItemDisplay } from '../../../model/item-display.model';
import { ItemDisplayService } from '../../../services/item-display/item-display.service';

@Component({
  selector: 'app-category-item-display',
  standalone: true,
  imports: [CommonModule, RecentPostComponent, MarkdownComponent, LanguageTagsComponent, RouterModule],
  templateUrl: './category-item-display.component.html',
  styleUrl: './category-item-display.component.css'
})
export class CategoryItemDisplayComponent implements OnInit {

  itemDisplay: ItemDisplay | undefined;
  markdown$: Observable<string> | undefined;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private mdService: MarkdownService,
    private itemDisplayService: ItemDisplayService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((routeParameters) => {

      // let category = this.activatedRoute.routeConfig?.path?.split("/")?.[0];
      // if (!category) {
      //   this.router.navigate(["home"]);
      //   return;
      // }


      let category = this.activatedRoute.snapshot.params['categoryListItem'];



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
