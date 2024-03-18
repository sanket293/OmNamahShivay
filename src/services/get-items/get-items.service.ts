import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryEnumTbl, CategoryEnumNotEntered, LanguageEnumTbl, VCategoryList, VCategoryListItem, Auther, VCategoryItemDisplay } from '../../model/categories.interface';
import { Post, VPostDetails } from '../../model/post.model';
import { AppUtilites } from '../../constants/apputilities.model';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  constructor(private http: HttpClient) {
  }
  //Categories
  getCategoryEnums(): Observable<CategoryEnumTbl[]> {
    return this.http.get<CategoryEnumTbl[]>(`${AppUtilites.API_BASE_URL}getCategoryEnums`);
  }

  getNotEnteredCategoryEnums(): Observable<CategoryEnumNotEntered[]> {
    return this.http.get<CategoryEnumNotEntered[]>(`${AppUtilites.API_BASE_URL}getNotEnteredCategoryEnums`);
  }

  getLanguageEnums(): Observable<LanguageEnumTbl[]> {
    return this.http.get<LanguageEnumTbl[]>(`${AppUtilites.API_BASE_URL}getLanguageEnums`);
  }

  getLanguageEnumNotEntered(categoryListItemId: number): Observable<LanguageEnumTbl[]> {
    return this.http.get<LanguageEnumTbl[]>(`${AppUtilites.API_BASE_URL}getLanguageEnumNotEntered/${categoryListItemId}`);
  }

  getCategoryList(): Observable<VCategoryList[]> {
    return this.http.get<VCategoryList[]>(`${AppUtilites.API_BASE_URL}getCategoryList`);
  }

  getCategoryListItem(categoryListId: string): Observable<VCategoryListItem[]> {
    if (!categoryListId) return of([]);
    return this.http.get<VCategoryListItem[]>(`${AppUtilites.API_BASE_URL}getCategoryListItem/${categoryListId}`);
  }

  getCategoryItemDisplay(categoryListItemId: string, languageId: number): Observable<VCategoryItemDisplay> {
    return this.http.get<VCategoryItemDisplay>(`${AppUtilites.API_BASE_URL}getCategoryItemDisplay/${categoryListItemId}/${languageId}`);
  }

  getAuthers(): Observable<Auther[]> {
    return this.http.get<Auther[]>(`${AppUtilites.API_BASE_URL}getAuthers`);
  }


  //Posts
  getAllPosts(): Observable<VPostDetails[]> {
    return this.http.get<VPostDetails[]>(`${AppUtilites.API_BASE_URL}getAllPosts`);
  }

  getPostDetails(postId: number): Observable<VPostDetails> {
    return this.http.get<VPostDetails>(`${AppUtilites.API_BASE_URL}getPostDetails/${postId}`);
  }

}
