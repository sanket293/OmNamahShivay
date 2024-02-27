import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Auther, LanguageEnumTbl } from '../../../model/category/categories.interface';
import { ResponseMessage } from '../../../model/response-message.model';
import { AddAutherDialogComponent } from '../../shared/dialogs/add-auther-dialog/add-auther-dialog.component';
import { AddItemsService } from '../../../services/add-items/add-items.service';
import { GetItemsService } from '../../../services/get-items/get-items.service';
import { Post } from '../../../model/post.model';
 
@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {

  showLoader: boolean = false;
  message: string = "";
  isActive: boolean = true;
  allLanguages$: Observable<LanguageEnumTbl[]> = of([]);
  AutherList$: Observable<Auther[]> = of([]);
 
  post: Post = { PostId: 0, Title: "", PostContent: "", PostLanguage: 0, IsActive: 1 }

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private getItemsService: GetItemsService,
    private addItemsService: AddItemsService) { }

  ngOnInit(): void {
    this.AutherList$ = this.getItemsService.getAuthers();
    this.allLanguages$ = this.getItemsService.getLanguageEnums();
  }

  onRefreshAutherBtnClick() {
    this.AutherList$ = this.getItemsService.getAuthers();
  }
  onAddAutherBtnClick() {
    this.dialog.open(AddAutherDialogComponent);
  }

  onInsertRecordBtnClick() {
    this.message = "";
    this.showLoader = true;

    if (!this.post.Title) {
      this.message = "Title  ";
    }
    if (!this.post.PostContent) {
      this.message = "PostContent  ";
    }
    if (!this.post.PostLanguage || this.post.PostLanguage == 0) {
      this.message = "PostLanguage";
    }

    if (this.message) {
      this.showLoader = false;
      return;
    }

    this.post.IsActive = +this.isActive;

    this.addItemsService.addPost(this.post).subscribe({
      next: (response: ResponseMessage) => {
        this.message = response.message;
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.message = "There is some error: " + JSON.stringify(err);
      },
      complete: () => {
        this.showLoader = false;
      }
    });

  }
}
