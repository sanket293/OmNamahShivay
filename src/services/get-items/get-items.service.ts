import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auther } from '../../model/auther.model';
import { CategoryEnumTbl, CategoryEnumNotEntered, LanguageEnumTbl, VCategoryList, VCategoryListItem } from '../../model/category/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  constructor(private http: HttpClient) {
  }

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
}
