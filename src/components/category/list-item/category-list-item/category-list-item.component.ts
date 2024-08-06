import { Component } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService } from '../../../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../../enums/languages.enum';
import { VCategoryListItem } from '../../../../model/categories.interface';
import { AppUtilites } from '../../../../utilities/apputilities.model';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.css',
  imports: [CommonModule, RouterModule],
})

//Stutie or Mantras or Bhajans
export class CategoryListItemComponent {

  categoryNameLabelSanskrit: string = ""; //TODO: get this
  categoryNameLabel: string = "";

  categoryListItemInfo$: Observable<VCategoryListItem[]> = of([]);
  AppUtilites = AppUtilites;
  isMobile = false;
  
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();

    const categoryListId: string = this.route.snapshot.params['categoryListId'];

    this.categoryService.getCategoryList().subscribe((categories) => {
      var currentCategory = categories.find(f => f.CategoryListId === +categoryListId);
      this.categoryNameLabelSanskrit = currentCategory?.CategoryNameLabelSanskrit ?? "Om Namah Shivay";
      this.categoryNameLabel = currentCategory?.CategoryNameLabel ?? "Shiv";
    })

    this.categoryListItemInfo$ = this.categoryService.getCategoryListItem(categoryListId);
  }

  getItemDisplayRouteLink(item: VCategoryListItem, language: Languages) {
    //TODO: set parma link  path: 'ItemDisplay/:parmaLinkDescription/:categoryListItemId/:languageId/:availableLanguages',
    return `/ItemDisplay/${(item.ParmaLinkDescription ?? item.ItemKey)}/${item.CategoryListItemId}/${language}/${item.AvailableLanguages}`;
  }

  getPostUrl(item: VCategoryListItem) {
    const firstLanguage = AppUtilites.getAvailableLanguagesId(item.AvailableLanguages)[0];
    return this.getItemDisplayRouteLink(item, firstLanguage);
  }

}
 