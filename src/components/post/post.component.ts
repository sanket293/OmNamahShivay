import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  post$: Observable<Post | undefined> | undefined;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private postService: PostService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((routeParameters) => {

      let post = this.activatedRoute.routeConfig?.path?.split("/")?.[0];
      if (!post) {
        this.router.navigate(["home"]);
        return;
      }

      let postId = routeParameters.get('postId') ?? 0;
      this.post$ = this.postService.getPostDetails(+postId);

      // console.log(JSON.stringify(routeParameters));

      // this.itemDisplayService.getItemDisplayDetails(category, itemKey, language).subscribe((itemDisplay: ItemDisplay) => {

      // console.log(JSON.stringify(itemDisplay));

      // this.itemDisplay = itemDisplay;
      // this.markdown$ = this.mdService.getSource(this.itemDisplay.markDownContantUrl);

      // });




    });
  }

}
