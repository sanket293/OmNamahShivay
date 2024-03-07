import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TagService } from '../../../services/tag/tag.service';
import { Tags } from '../../../model/tags.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent implements OnInit {

  homeBannerTags$: Observable<Tags[]> = of([]);

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.homeBannerTags$ = this.tagService.getHomeBannerTags();
  }

}
