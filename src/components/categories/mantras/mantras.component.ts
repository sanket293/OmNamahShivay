import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from "../../shared/item/item.component";

@Component({
    selector: 'app-mantras',
    standalone: true,
    templateUrl: './mantras.component.html',
    styleUrl: './mantras.component.css',
    imports: [RouterModule, CommonModule, ItemComponent]
})
export class MantrasComponent {
 
}
