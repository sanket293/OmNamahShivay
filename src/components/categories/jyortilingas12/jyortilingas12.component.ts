import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCardInfoComponent } from "../../shared/category-card-info/category-card-info.component";
import { CategoryCardInfoService } from '../../../services/category-card-info/category-card-info.service';
import { CategoryCardInfo } from '../../../model/category-card-info.model';
import { Observable } from 'rxjs';
import { Categories } from '../../../enums/categories.enum';
import { ItemComponent } from "../../shared/item/item.component";

@Component({
    selector: 'app-jyortilingas12',
    standalone: true,
    templateUrl: './jyortilingas12.component.html',
    styleUrl: './jyortilingas12.component.css',
    imports: [RouterModule, CommonModule, CategoryCardInfoComponent, ItemComponent]
})
export class Jyortilingas12Component {

  // itemText: string = "शिव जी के 12 ज्योर्तिलिङ्गाः";
  // postTitle: string = "12 Jyortilingas of Lord Shiva";
  // categoryCardInfo$!: Observable<CategoryCardInfo[]>;

  // constructor(private categoryCardInfoService: CategoryCardInfoService) { }

  // ngOnInit(): void {
  //   this.categoryCardInfo$ = this.categoryCardInfoService.getCategoryCardInfo(Categories.Mantras);
  // }
  
}
