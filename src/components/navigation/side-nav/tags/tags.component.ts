import { Component, OnInit } from '@angular/core';
import { TagService } from '../../../../services/tag/tag.service';
import { AppUtilites } from '../../../../utilities/apputilities.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tag } from '../../../../model/tags.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})

export class TagsComponent implements OnInit {

  sideNavBannerTags$: Observable<Tag[]> = of([]);

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.sideNavBannerTags$ = this.tagService.getSideNavTags();
  }

}
