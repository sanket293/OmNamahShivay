import { Component, OnInit } from '@angular/core';
import { Post, VPostDetails } from '../../../model/post.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { Languages } from '../../../enums/languages.enum';
import { AppUtilites } from '../../../constants/apputilities.model';
import { GetItemsService } from '../../../services/get-items/get-items.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule, CommonModule, MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  post$: Observable<VPostDetails> | undefined;
  language: Languages = Languages.Hindi;
  AppUtilites = AppUtilites;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public getItemsService: GetItemsService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((routeParameters) => {

      let post = this.activatedRoute.routeConfig?.path?.split("/")?.[0];
      if (!post) {
        this.router.navigate(["home"]);
        return;
      }

      let postId = routeParameters.get('postId') ?? 0;
      this.post$ = this.getItemsService.getPostDetails(+postId);
    });

  }

}
