import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 import { CategoryCardInfoService } from '../../../services/category-card-info/category-card-info.service';
import { CategoryCardInfo } from '../../../model/category/category-card-info.model';
import { Observable } from 'rxjs';
import { CategoryEnum } from '../../../enums/category-enum.enum';
import { ItemDisplayComponent } from "../../shared/item-display/item-display.component";

@Component({
    selector: 'app-jyortilingas12',
    standalone: true,
    templateUrl: './jyortilingas12.component.html',
    styleUrl: './jyortilingas12.component.css',
    imports: [RouterModule, CommonModule, ItemDisplayComponent]
})
export class Jyortilingas12Component {
 
}
