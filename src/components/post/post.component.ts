import { Component, OnInit } from '@angular/core';
// import { Post } from '../../model/post.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { Languages } from '../../enums/languages.enum';
import { AppUtilites } from '../../utilities/apputilities.model';
import { VPostDetails } from '../../model/posts.interface';
import { MarkdownComponent } from "../shared/markdown/markdown.component";

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
    imports: [RouterModule, CommonModule, MarkdownComponent]
})
export class PostComponent implements OnInit {

  post$: Observable<VPostDetails> | undefined;
  language: Languages = Languages.Hindi;
  AppUtilites = AppUtilites;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private postService: PostService) { }

  ngOnInit() { 
    this.activatedRoute.paramMap.subscribe((routeParameters) => {
      let postId = routeParameters.get('postId') ?? 1; //TODO: create one or any default post for this 
      this.post$ = this.postService.getPostDetails(+postId);
    });

  }

}
