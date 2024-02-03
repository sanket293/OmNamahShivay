import { Component, OnInit } from '@angular/core';
import { ItemProperty } from '../../../../model/ItemProperty.model';
 import { TagService } from '../../../../services/tag/tag.service';
import { AppUtilites } from '../../../../constants/apputilities.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})

export class TagsComponent implements OnInit {

  sideNavBannerTags: ItemProperty[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit(): void { 
    this.tagService.getSideNavTags().subscribe({
      next: (tags: ItemProperty[]) => {
        this.sideNavBannerTags = tags;
      },
      error: (error) => {
        console.log('Something is wrong' + JSON.stringify(error));
      },
      complete: () => {
        this.sideNavBannerTags = AppUtilites.shuffle(this.sideNavBannerTags);
      }
    });
  }
 
}
