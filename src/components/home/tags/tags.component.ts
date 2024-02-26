import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryEnumTbl, LanguageEnumTbl } from '../../../model/category/categories.interface';
import { MatDialog } from '@angular/material/dialog';
import { InsertDialogComponent } from '../../shared/dialogs/insert-dialog/insert-dialog.component';
import { GetItemsService } from '../../../services/get-items/get-items.service';

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

  constructor(private getItemsService: GetItemsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    if (this.tagType === "CategoryEnum")
      this.categoryEnums$ = this.getItemsService.getCategoryEnums();

    if (this.tagType === "LanguageEnum")
      this.languageEnums$ = this.getItemsService.getLanguageEnums();
  }

  openDialog() {
    let dialogRef = this.dialog.open(InsertDialogComponent);
    dialogRef.componentInstance.tagType = this.tagType;
  }

}
