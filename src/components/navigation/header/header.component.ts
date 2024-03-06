import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCategoryList } from '../../../model/categories.interface';
import { GetItemsService } from '../../../services/get-items/get-items.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../../home/home.component';
import { AddAutherDialogComponent } from '../../add/add-auther-dialog/add-auther-dialog.component';
import { AddTagsComponent } from '../../add/add-tags/add-tags.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  categories$: Observable<VCategoryList[]> | undefined;

  constructor(private getItemsService: GetItemsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.categories$ = this.getItemsService.getCategoryList();
  }

  onTagsClick() {
    this.dialog.open(AddTagsComponent);
  }

  onNavLinkClick(category: VCategoryList) {
    // this.router.navigate([category.routeUrl]).then(() => {
    //   window.location.reload();
    // });
    //TODO: add this
  } 

  onAuthersClick() {
    this.dialog.open(AddAutherDialogComponent);
  }
  onPostsClick() { 
    //TODO: send to add post
  }
}
