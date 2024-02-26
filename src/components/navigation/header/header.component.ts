import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCategoryList } from '../../../model/category/categories.interface'; 
import { GetItemsService } from '../../../services/get-items/get-items.service';

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

  constructor(private getItemsService: GetItemsService) { }

  ngOnInit(): void {
    this.categories$ = this.getItemsService.getCategoryList();
  }
  onAuthersClick() { }
  onPostsClick() { }
}
