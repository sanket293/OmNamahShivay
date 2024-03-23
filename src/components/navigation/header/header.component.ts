import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TagService } from '../../../services/tag/tag.service';
import { VCategoryList } from '../../../model/categories.interface';
import { Tags } from '../../../model/tags.interface';
import { AppUtilites } from '../../../utilities/apputilities.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  onNavLinkClick(category: VCategoryList) {
    this.router.navigate([AppUtilites.getCategoryRouteLink(category)]).then(() => {
      window.location.reload();
    });
  }

  categories$: Observable<VCategoryList[]> | undefined;
  tags$: Observable<Tags[]> = of([]);

  constructor(private categoryService: CategoryService, private tagService: TagService, private router: Router) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();
    this.tags$ = this.tagService.getSideNavTags();
  }

}
