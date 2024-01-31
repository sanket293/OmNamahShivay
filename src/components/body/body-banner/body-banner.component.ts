import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './body-banner.component.html',
  styleUrl: './body-banner.component.css'
})
export class BodyBannerComponent {
  currentItem = 'Television';
}
