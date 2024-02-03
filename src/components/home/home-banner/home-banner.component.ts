import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemProperty } from '../../../model/ItemProperty.model';
import { HomeService } from '../../../services/home/home.service';
import { TagService } from '../../../services/tag/tag.service';
import { AppUtilites } from '../../../constants/apputilities.model';
import { AppStrings } from '../../../constants/appstrings.model';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent implements OnInit {
  
  homeBannerTags: ItemProperty[] = [];
  static AppStrings: AppStrings;

  constructor(private homeService: HomeService, private tagService: TagService) {

  }

  ngOnInit(): void {
      this.tagService.getHomeBannerTags().subscribe({
        next: (tags: ItemProperty[]) => {
          this.homeBannerTags = tags;
          this.homeBannerTags.forEach(s=>{ console.log(s.routeUrl)});
        },
        error: (error) => {
          console.log('Something is wrong' + JSON.stringify(error));
        },
        complete: () => {
          this.homeBannerTags = AppUtilites.shuffle(this.homeBannerTags);
        }
      });
  }

}
