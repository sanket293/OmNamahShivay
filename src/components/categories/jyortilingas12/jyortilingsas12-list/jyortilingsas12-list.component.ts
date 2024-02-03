import { Component } from '@angular/core';
import { CategoryCardInfoComponent } from "../../../shared/category-card-info/category-card-info.component";
import { Observable } from 'rxjs';
import { Categories } from '../../../../enums/categories.enum';
import { CategoryCardInfo } from '../../../../model/category-card-info.model';
import { CategoryCardInfoService } from '../../../../services/category-card-info/category-card-info.service';

@Component({
    selector: 'app-jyortilingsas12-list',
    standalone: true,
    templateUrl: './jyortilingsas12-list.component.html',
    styleUrl: './jyortilingsas12-list.component.css',
    imports: [CategoryCardInfoComponent]
})
export class Jyortilingsas12ListComponent {
  itemText: string = "शिव जी के 12 ज्योर्तिलिङ्गाः";
  postTitle: string = "12 Jyortilingas of Lord Shiva";
  categoryCardInfo$!: Observable<CategoryCardInfo[]>;

  constructor(private categoryCardInfoService: CategoryCardInfoService) { }

  ngOnInit(): void {
    this.categoryCardInfo$ = this.categoryCardInfoService.getCategoryCardInfo(Categories.Jyortilingas12);
  }
  
}
