import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { Languages } from '../../enums/languages.enum';
import { AppUtilites } from '../../utilities/apputilities.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule, CommonModule, MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  post$: Observable<Post | undefined> | undefined;
  language: Languages = Languages.Hindi;
  AppUtilites = AppUtilites;
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
  // getLanguageName(languageEnum: Languages = Languages.Hindi): string {
  //   return Languages[languageEnum].toString();
  // }



}
