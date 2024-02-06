import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { CategoryCardInfo } from '../../../../model/category/category-card-info.model';
import { StutieService } from '../../../../services/stutie/stutie.service';
import { CategoryCardInfoService } from '../../../../services/category-card-info/category-card-info.service';
import { CategoryEnum } from '../../../../enums/category-enum.enum';

@Component({
  selector: 'app-stutie-list',
  standalone: true,
  templateUrl: './stutie-list.component.html',
  styleUrl: './stutie-list.component.css',
  imports: []
})
export class StutieListComponent implements OnInit {

  // itemText: string = "शिव जी की स्तुति";
  // postTitle: string = "Shiv Stuties";
  // categoryCardInfo$!: Observable<CategoryCardInfo[]>;

  constructor(private categoryCardInfoService: CategoryCardInfoService) { }

  ngOnInit(): void {
    // this.categoryCardInfo$ = this.categoryCardInfoService.getCategoryCardInfo("CategoryEnum.Stuties");
  }
}

