import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { RecentPostComponent } from '../../../post/recent-post/recent-post.component';
import { LanguageTagsComponent } from '../../../shared/language-tags/language-tags.component';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../../services/category/category.service';
import { VCategoryItemDisplay } from '../../../../model/categories.interface';
import { Languages } from '../../../../enums/languages.enum';
import { LoaderComponent } from "../../../shared/loader/loader.component";
 import { AppUtilites } from '../../../../utilities/apputilities.model';
import { Tags } from '../../../../model/tags.interface';
 
@Component({
  selector: 'app-category-item-display',
  standalone: true,
  templateUrl: './category-item-display.component.html',
  styleUrl: './category-item-display.component.css',
  imports: [CommonModule, RecentPostComponent, MarkdownComponent, LanguageTagsComponent, RouterModule, LoaderComponent]
})
export class CategoryItemDisplayComponent implements OnInit {

  availableLanguages: string = ""; //TODO: default language, let it from app utilities
  itemDisplay$: Observable<VCategoryItemDisplay> | undefined;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((routeParameters) => {

      let categoryListItemId = routeParameters.get('categoryListItemId') ?? "";
      let languageId = Number(routeParameters.get('languageId')) ?? Languages.Sanskrit;
      this.availableLanguages = routeParameters.get('availableLanguages') ?? languageId.toString();

      this.itemDisplay$ = this.categoryService.getCategoryItemDisplay(categoryListItemId, languageId);
    });
  }

  getItemLanguageTags(itemDisplay: VCategoryItemDisplay): Tags[] {
    return AppUtilites.getRouteUrlLangItemDisplay(this.availableLanguages, itemDisplay);
  }

}
