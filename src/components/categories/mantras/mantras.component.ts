import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mantras',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mantras.component.html',
  styleUrl: './mantras.component.css'
})
export class MantrasComponent {
  stutiePosterImageUrl: string = "/assets/images/post/post-2.jpg";
  stutieLanguage: string = "Shiv Mahimna Strotam"

  authorName: string = "Sanket Vagadiya";
  authorImageUrl: String = "/assets/images/john-doe.jpg";

  timeToRead: string = "7 Min To Read";

  stutieLanguages: string[] = ["Sanskrit", "Hindi", "Gujarati", "English"];
  currentStutieLanguage: string = "Sanskrit";

  mantraItemPoster: string = "/assets/images/post/post-1.jpg";

}
