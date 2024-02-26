import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { LanguageTagsComponent } from '../../shared/language-tags/language-tags.component';
import { Observable } from 'rxjs';
import { ItemDisplay } from '../../../model/item-display.model';
import { ItemDisplayService } from '../../../services/item-display/item-display.service';

@Component({
  selector: 'app-category-item-display',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, LanguageTagsComponent, RouterModule],
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

      let category = this.activatedRoute.snapshot.params['categoryListItem'];

      let itemKey = routeParameters.get('itemKey') ?? "";
      let language = routeParameters.get('language') ?? "";

      this.itemDisplayService.getItemDisplayDetails(category, itemKey, language).subscribe((itemDisplay: ItemDisplay) => {
        this.itemDisplay = itemDisplay;
        this.markdown$ = this.mdService.getSource(this.itemDisplay.markDownContantUrl)
      });

    });
  }

}
