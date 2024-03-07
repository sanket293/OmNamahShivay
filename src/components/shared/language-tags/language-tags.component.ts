import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tags } from '../../../model/tags.interface';
  
@Component({
  selector: 'app-language-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './language-tags.component.html',
  styleUrl: './language-tags.component.css'
})
export class LanguageTagsComponent {
  @Input() itemLanguageTags: Tags[] = [];

}
