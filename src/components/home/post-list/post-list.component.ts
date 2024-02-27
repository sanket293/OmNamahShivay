import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUtilites } from '../../../constants/apputilities.model';
import { VPostDetails } from '../../../model/post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';
import { GetItemsService } from '../../../services/get-items/get-items.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  imports: [CategoriesComponent, TagsComponent, RouterModule, CommonModule]

})
export class PostListComponent implements OnInit {
  AppUtilites = AppUtilites;

  constructor(private getItemsService: GetItemsService) { }

  recentPosts$: Observable<VPostDetails[]> = of([]);

  ngOnInit(): void {
    // Post
    this.recentPosts$ = this.getItemsService.getAllPosts();
  }
}
