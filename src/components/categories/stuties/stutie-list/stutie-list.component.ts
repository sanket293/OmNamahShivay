import { Component, OnInit } from '@angular/core';
import { Languages } from '../../../../enums/languages.enum';
import { CategoryCardInfoComponent } from "../../../shared/category-card-info/category-card-info.component";
import { Observable } from 'rxjs';
import { CategoryCardInfo } from '../../../../model/category-card-info.model';
import { StutieService } from '../../../../services/stutie/stutie.service';
import { CategoryCardInfoService } from '../../../../services/category-card-info/category-card-info.service';
import { Categories } from '../../../../enums/categories.enum';

@Component({
  selector: 'app-stutie-list',
  standalone: true,
  templateUrl: './stutie-list.component.html',
  styleUrl: './stutie-list.component.css',
  imports: [CategoryCardInfoComponent]
})
export class StutieListComponent implements OnInit {

  itemText: string = "शिव जी की स्तुति";
  postTitle: string = "Shiv Stuties";
  categoryCardInfo$!: Observable<CategoryCardInfo[]>;

  constructor(private categoryCardInfoService: CategoryCardInfoService) { }

  ngOnInit(): void {
    this.categoryCardInfo$ = this.categoryCardInfoService.getCategoryCardInfo(Categories.Stuties);
  }
}

