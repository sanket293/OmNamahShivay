import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemProperty } from '../../../model/ItemProperty.model';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent implements OnInit {

  homeBannerTags: ItemProperty[] = [];

  constructor(private homeService: HomeService) {  }
  ngOnInit(): void {

    this.homeService.getHomeBannerTags().subscribe({
      next: (tags: ItemProperty[]) => {
        this.homeBannerTags = tags;
      },
      error: (error) => {
        console.log('Something is wrong' + JSON.stringify(error));
      },
      complete: () => {
        this.homeBannerTags = this.shuffle(this.homeBannerTags);
      }
    });
  }


  shuffle = (array: ItemProperty[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  
}
