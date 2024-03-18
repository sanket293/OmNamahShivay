import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ResponseMessage } from '../../../model/response-message.model';
import { AddItemsService } from '../../../services/add-items/add-items.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { AddAutherDialogComponent } from '../add-auther-dialog/add-auther-dialog.component';
import { Tags } from '../../../model/tags.interface';
import { VCategoryItemDisplay, VCategoryList, VCategoryListItem } from '../../../model/categories.interface';
import { Languages } from '../../../enums/languages.enum';
import { GetItemsService } from '../../../services/get-items/get-items.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-add-tags',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-tags.component.html',
  styleUrl: './add-tags.component.css'
})
export class AddTagsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddAutherDialogComponent>,
    private addItemsService: AddItemsService,
    private getItemsService: GetItemsService,
    private snackBar: MatSnackBar) { }

  tag: Tags = { Name: "", RouteUrl: "" };
  showLoader: boolean = false;
  routeUrl$: BehaviorSubject<string> = new BehaviorSubject("/");
  isHomePage: boolean = false;

  categoryList$: Observable<VCategoryList[]> | undefined;
  categoryListItem$: Observable<VCategoryListItem[]> | undefined;
  categoryItmDisplay$: Observable<VCategoryItemDisplay> | undefined;
  itemLanguages: Languages[] = [];
  availableLanguages: string = "";

  selectedCategoryListId: string = "0";
  selectedCategoryListItemId: string = "0";
  selectListItemLanguage: number = 0;


  ngOnInit(): void {

    //Enter Name
    //Select category
    //Select categoryListItem?
    //Select categoryItemDisplay? => Select Language

    this.categoryList$ = this.getItemsService.getCategoryList();
  }

  onCategoryChange(categoryListId: any) {
    this.selectedCategoryListId = categoryListId;
    this.routeUrl$.next(`/ListItem/OmNamahShivay/${this.selectedCategoryListId}`) //TODO: get parma link
    this.categoryListItem$ = this.getItemsService.getCategoryListItem(categoryListId.toString());
  }

  onCategoryListItemChange(categoryListItemId: any) {
    this.selectedCategoryListItemId = categoryListItemId;

    this.categoryListItem$?.subscribe((catList: VCategoryListItem[]) => {
      const vCategoryListItem = catList.find(f => f.CategoryListItemId === categoryListItemId);
      this.availableLanguages = vCategoryListItem?.AvailableLanguages ?? "";
      this.itemLanguages = this.getAvailableLanguagesId(this.availableLanguages);
    });
  }

  onItemLanguageChange(languageId: any) {
    this.selectListItemLanguage = languageId;
    this.getItemsService.getCategoryItemDisplay(this.selectedCategoryListItemId, languageId).subscribe((itemDisplay: VCategoryItemDisplay) => {
      let parmaLinkDescription: string = itemDisplay?.ParmaLinkDescription ?? itemDisplay?.ItemKey ?? "Shiv";
      this.routeUrl$.next(`/ItemDisplay/${parmaLinkDescription}/${this.selectedCategoryListItemId}/${languageId}/${this.availableLanguages}`)
    });
  }

  public getLanguageName(languageEnum: Languages = Languages.Hindi): string {
    return Languages[languageEnum].toString();
  }

  public getAvailableLanguagesId(availableLanguages: string): Languages[] {
    let languages: Languages[] = [];
    if (availableLanguages) {
      if (!availableLanguages.includes(',')) return [parseInt(availableLanguages)];

      availableLanguages?.split(',').map(m => parseInt(m)).forEach(langId => languages.push(langId));
    }
    return languages;
  }

  onInsertRecordBtnClick() {
    if (!this.tag.Name) {
      this.snackBar.open("Please enter tag name");
      return;
    }

    this.tag.ShowOnHomeBanner = this.isHomePage;

    this.tag.RouteUrl = this.routeUrl$.getValue();

    this.addItemsService.addTags(this.tag).subscribe({
      next: (response: ResponseMessage) => {
        if (response.success) {
          this.dialogRef.close();
          this.snackBar.open("successfully inserted Tag!");
        } else {
          this.snackBar.open("There is something wrong, check console log");
          console.log("There is something wrong: " + JSON.stringify(response.error));
        }
      },
      error: (err) => {
        this.snackBar.open("There is something wrong, check console log");
        console.log("There is some error: " + JSON.stringify(err));
        this.showLoader = false;
      },
      complete: () => {
        this.showLoader = false;
      }
    });
  }
}
