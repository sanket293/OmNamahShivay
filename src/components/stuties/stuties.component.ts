import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecentPostComponent } from "../shared/recent-post/recent-post.component";
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stuties',
  standalone: true,
  templateUrl: './stuties.component.html',
  styleUrl: './stuties.component.css',
  imports: [CommonModule, RecentPostComponent]
})
export class StutiesComponent implements OnInit{

  constructor(public activatedRoute: ActivatedRoute) {}

  state$!: Observable<object>;

  stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
  stutieLanguage: string = "Shiv Mahimna Strotam"

  authorName: string = "Sanket Vagadiya";
  authorImageUrl: String = "/assets/images/john-doe.jpg";

  timeToRead: string = "7 Min To Read";

  stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
  currentStutieLanguage: string = "Sanskrit";

  stutieContent: string = `
  ॥ ॐ नमः शिवाय॥    
  ॥ अथ श्री शिवमहिम्नस्तोत्रम्‌॥
\n
  महिम्नः पारं ते परमविदुषो यद्यसदृशी
  
  स्तुतिर्ब्रह्मादीनामपि तदवसन्नास्त्वयि गिरः ।
  
  अथाऽवाच्यः सर्वः स्वमतिपरिणामावधि गृणन्‌
  
  ममाप्येष स्तोत्रे हर निरपवादः परिकरः॥ १॥`;

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
  }

}
