import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemLanguageTag } from '../../../model/item-language-tag.model';

@Component({
  selector: 'app-language-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './language-tags.component.html',
  styleUrl: './language-tags.component.css'
})
export class LanguageTagsComponent {
  @Input() itemLanguageTags: ItemLanguageTag[] | undefined;

}
