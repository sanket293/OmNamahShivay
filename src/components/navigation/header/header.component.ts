import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCategoryList } from '../../../model/category/categories.interface';
import { GetItemsService } from '../../../services/get-items/get-items.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../../home/home.component';
import { AddAutherDialogComponent } from '../../shared/dialogs/add-auther-dialog/add-auther-dialog.component';

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

  constructor(private getItemsService: GetItemsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.categories$ = this.getItemsService.getCategoryList();
  }

  onAuthersClick() {
    this.dialog.open(AddAutherDialogComponent);
  }
  onPostsClick() { }
}
