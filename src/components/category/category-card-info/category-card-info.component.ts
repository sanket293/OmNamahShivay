import { Component, Input, OnInit, input } from '@angular/core';
import { CategoryCardInfo } from '../../../model/category-card-info.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../enums/languages.enum';
import { RouterModule } from '@angular/router';
import { CategoryListItem } from '../../../enums/category-list-item.enum';

@Component({
  selector: 'app-category-card-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-card-info.component.html',
  styleUrl: './category-card-info.component.css'
})
export class CategoryCardInfoComponent implements OnInit {
 
  @Input() itemText: string = "शिव";
  @Input() postTitle: string = "Shiv";
  @Input() categoryCardInfo$!: Observable<CategoryCardInfo[] | null>;

  ngOnInit(): void {
  }

  getLanguageName(languageId: number) {
    return Languages[languageId];
  }

  getRouteUrlForLanguageTag(item: CategoryCardInfo, languageId: number) {
    return `/${CategoryListItem[item.category]}/${item.itemKey}/${Languages[languageId]}`; //Don't forget to use absolute path, put / infront of route, this will replace whole path insted of just append 
  }

  getPostUrl(item: CategoryCardInfo) {
    return `/${CategoryListItem[item.category]}/${item.itemKey}/${Languages[1]}`;
  }
}
