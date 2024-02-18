import { Component, Input, OnInit } from '@angular/core';
import { TagService } from '../../../../services/tag/tag.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryEnumTbl, LanguageEnumTbl } from '../../../../model/category/categories.interface';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})

export class TagsComponent implements OnInit {
  @Input() tagTitle: string = "Enum";
  @Input() tagType: string = "CategoryEnum";

  categoryEnums$: Observable<CategoryEnumTbl[]> = of([]);

  languageEnums$: Observable<LanguageEnumTbl[]> = of([]);

  constructor(private tagService: TagService) { }

  ngOnInit(): void {

    if (this.tagType === "CategoryEnum")
      this.categoryEnums$ = this.tagService.getCategoryEnumTags();

    if (this.tagType === "LanguageEnum")
      this.languageEnums$ = this.tagService.getLanguageEnumTags();
  }

}
