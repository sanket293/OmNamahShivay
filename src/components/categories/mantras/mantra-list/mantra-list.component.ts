import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryCardInfo } from '../../../../model/category-card-info.model';
import { StutieService } from '../../../../services/stutie/stutie.service';
import { CategoryCardInfoComponent } from "../../../shared/category-card-info/category-card-info.component";
import { CategoryCardInfoService } from '../../../../services/category-card-info/category-card-info.service';
import { Categories } from '../../../../enums/categories.enum';

@Component({
    selector: 'app-mantra-list',
    standalone: true,
    templateUrl: './mantra-list.component.html',
    styleUrl: './mantra-list.component.css',
    imports: [CategoryCardInfoComponent]
})
export class MantraListComponent {

  itemText: string = "भगवान शिव के मंत्र";
  postTitle: string = "Lord Shiva Mantra";
  categoryCardInfo$!: Observable<CategoryCardInfo[]>;

  constructor(private categoryCardInfoService: CategoryCardInfoService) { }

  ngOnInit(): void {
    this.categoryCardInfo$ = this.categoryCardInfoService.getCategoryCardInfo(Categories.Mantras);
  }
}
