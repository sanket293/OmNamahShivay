import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryEnumTbl, CategoryEnumNotEntered, LanguageEnumTbl, VCategoryList, VCategoryListItem, Auther } from '../../model/category/categories.interface';
import { Post, VPostDetails } from '../../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  constructor(private http: HttpClient) {
  }
  //Categories
  getCategoryEnums(): Observable<CategoryEnumTbl[]> {
    return this.http.get<CategoryEnumTbl[]>("https://omnamahshivay-api.onrender.com/getCategoryEnums");
  }

  getNotEnteredCategoryEnums(): Observable<CategoryEnumNotEntered[]> {
    return this.http.get<CategoryEnumNotEntered[]>("https://omnamahshivay-api.onrender.com/getNotEnteredCategoryEnums");
  }

  getLanguageEnums(): Observable<LanguageEnumTbl[]> {
    return this.http.get<LanguageEnumTbl[]>("https://omnamahshivay-api.onrender.com/getLanguageEnums");
  }

  getLanguageEnumNotEntered(categoryListItemId: number): Observable<LanguageEnumTbl[]> {
    return this.http.get<LanguageEnumTbl[]>(`https://omnamahshivay-api.onrender.com/getLanguageEnumNotEntered/${categoryListItemId}`);
  }

  getCategoryList(): Observable<VCategoryList[]> {
    return this.http.get<VCategoryList[]>("https://omnamahshivay-api.onrender.com/getCategoryList");
  }

  getCategoryListItem(categoryListId: string): Observable<VCategoryListItem[]> {
    if (!categoryListId) return of([]);
    return this.http.get<VCategoryListItem[]>(`https://omnamahshivay-api.onrender.com/getCategoryListItem/${categoryListId}`);
  }

  getAuthers(): Observable<Auther[]> {
    return this.http.get<Auther[]>("https://omnamahshivay-api.onrender.com/getAuthers");
  }


  //Posts
  getAllPosts(): Observable<VPostDetails[]> {
    return this.http.get<VPostDetails[]>(`https://omnamahshivay-api.onrender.com/getAllPosts`);
  }

  getPostDetails(postId: number): Observable<VPostDetails> {
    return this.http.get<VPostDetails>(`https://omnamahshivay-api.onrender.com/getPostDetails/${postId}`);
  }

}
