import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {

}
