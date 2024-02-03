import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemDisplayComponent } from "../../shared/item-display/item-display.component";

@Component({
    selector: 'app-mantras',
    standalone: true,
    templateUrl: './mantras.component.html',
    styleUrl: './mantras.component.css',
    imports: [RouterModule, CommonModule, ItemDisplayComponent]
})
export class MantrasComponent {
 
}
