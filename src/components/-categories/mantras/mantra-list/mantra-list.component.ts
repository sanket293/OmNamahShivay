import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryCardInfo } from '../../../../model/category/category-card-info.model';
import { StutieService } from '../../../../services/stutie/stutie.service';
 import { CategoryCardInfoService } from '../../../../services/category-card-info/category-card-info.service';
import { CategoryEnum } from '../../../../enums/category-enum.enum';

@Component({
    selector: 'app-mantra-list',
    standalone: true,
    templateUrl: './mantra-list.component.html',
    styleUrl: './mantra-list.component.css',
    imports: [ ]
})
export class MantraListComponent {

  itemText: string = "भगवान शिव के मंत्र";
  postTitle: string = "Lord Shiva Mantra";
  categoryCardInfo$!: Observable<CategoryCardInfo[]>;

  constructor(private categoryCardInfoService: CategoryCardInfoService) { }

  ngOnInit(): void {
    this.categoryCardInfo$ = this.categoryCardInfoService.getCategoryCardInfo("CategoryEnum.Mantras");
  }
}
