import { Component, Input, OnInit, input } from '@angular/core';
import { CategoryCardInfo } from '../../../model/category-card-info.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Languages } from '../../../enums/languages.enum';
import { RouterModule } from '@angular/router';
import { Categories } from '../../../enums/categories.enum';

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
 
  getRouteUrlForTag(item: CategoryCardInfo, languageId: number) {
    return `${Categories[item.category]}/${item.itemKey}/${Languages[languageId]}`;
  }

}
