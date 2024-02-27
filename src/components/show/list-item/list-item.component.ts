import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryEnum } from '../../../enums/category-enum.enum';
import { Languages } from '../../../enums/languages.enum';
import { VCategoryListItem, VCategoryList } from '../../../model/category/categories.interface';
import { CategoryCardInfo } from '../../../model/category/category-card-info.model';
import { CommonModule } from '@angular/common';
import { GetItemsService } from '../../../services/get-items/get-items.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent implements OnInit {
  categoryListId: string = "0";
  categoryListItemInfo$: Observable<VCategoryListItem[]> = of([]);
  category!: VCategoryList | undefined;

  constructor(private getItemsService: GetItemsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.categoryListId = this.activatedRoute.snapshot.params['CategoryListId'];

    this.categoryListItemInfo$ = this.getItemsService.getCategoryListItem(this.categoryListId);

    this.getItemsService.getCategoryList().subscribe(
      data => {
        this.category = data.find(f => f.CategoryListId.toString() === this.categoryListId)
      })
  }

  getLanguageName(languageId: number) {
    return Languages[languageId];
  }


  getPostUrl(item: CategoryCardInfo) {
    return `/CategoryList/${CategoryEnum[item.category]}/${item.itemKey}/${Languages[1]}`;
  }

  getAvailableLanguages(availableLanguages: string): string[] {

    let languages: string[] = [];
    if (availableLanguages) {
      if (!availableLanguages.includes(',')) {
        return [Languages[parseInt(availableLanguages)]];
      }

      availableLanguages?.split(',').map(m => parseInt(m)).forEach(f => languages.push(Languages[f]?.toString()));
    }
    return languages;
  }
}
 

