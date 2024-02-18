import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TagService } from '../../../services/tag/tag.service';
import { ItemProperty } from '../../../model/ItemProperty.model';
import { Category } from '../../../model/category/category.model';
import { VCategoryList } from '../../../model/category/categories.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  onNavLinkClick(category: VCategoryList) {
    // this.router.navigate([category.routeUrl]).then(() => {
    //   window.location.reload();
    // });
  }

  categories$: Observable<VCategoryList[]> | undefined;

  constructor(private categoryService: CategoryService, private tagService: TagService, private router: Router) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();
  }

}
