import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCardInfoComponent } from "../../shared/category-card-info/category-card-info.component";
import { CategoryCardInfoService } from '../../../services/category-card-info/category-card-info.service';
import { CategoryCardInfo } from '../../../model/category-card-info.model';
import { Observable } from 'rxjs';
import { Categories } from '../../../enums/categories.enum';
import { ItemDisplayComponent } from "../../shared/item-display/item-display.component";

@Component({
    selector: 'app-jyortilingas12',
    standalone: true,
    templateUrl: './jyortilingas12.component.html',
    styleUrl: './jyortilingas12.component.css',
    imports: [RouterModule, CommonModule, CategoryCardInfoComponent, ItemDisplayComponent]
})
export class Jyortilingas12Component {
 
}
