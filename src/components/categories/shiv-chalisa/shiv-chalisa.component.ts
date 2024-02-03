import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecentPostComponent } from "../../shared/recent-post/recent-post.component";
import { ItemDisplayComponent } from "../../shared/item-display/item-display.component";

@Component({
    selector: 'app-shiv-chalisa',
    standalone: true,
    templateUrl: './shiv-chalisa.component.html',
    styleUrl: './shiv-chalisa.component.css',
    imports: [RouterModule, CommonModule, RecentPostComponent, ItemDisplayComponent]
})
export class ShivChalisaComponent {

}
