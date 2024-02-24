import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auther } from '../../model/auther.model';
import { CategoryList, CategoryListItem, CategoryItemDisplay, CategoryEnumTbl, LanguageEnumTbl } from '../../model/category/categories.interface';
import { ResponseMessage } from '../../model/response-message.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {
  
  constructor(private http: HttpClient) { }

  addCategoryList(categoryList: CategoryList): Observable<ResponseMessage> {
    try {
      const headers = { 'Content-Type': 'application/json' };
      let url = "https://omnamahshivay-api.onrender.com/addCategoryList"
      return this.http.post<ResponseMessage>(url, JSON.stringify(categoryList), { headers });
    } catch (ex) {
      var errResponseMsg: ResponseMessage = {
        success: false,
        message: "Cannot enter category list. See error for more details",
        error: JSON.stringify(ex)
      };
      return of(errResponseMsg);
    }
  }

  addCategoryListItem(categoryListItem: CategoryListItem): Observable<ResponseMessage> {
    try {
      const headers = { 'Content-Type': 'application/json' };
      let url = "https://omnamahshivay-api.onrender.com/addCategoryListItem"
      return this.http.post<ResponseMessage>(url, JSON.stringify(categoryListItem), { headers });
    } catch (ex) {
      var errResponseMsg: ResponseMessage = {
        success: false,
        message: "Cannot enter category list Item. See error for more details",
        error: JSON.stringify(ex)
      };
      return of(errResponseMsg);
    }
  }

  addCategoryItemDisplay(categoryItemDisplay: CategoryItemDisplay): Observable<ResponseMessage> {
    try {
      const headers = { 'Content-Type': 'application/json' };
      let url = "https://omnamahshivay-api.onrender.com/addCategoryItemDisplay"
      return this.http.post<ResponseMessage>(url, JSON.stringify(categoryItemDisplay), { headers });
    } catch (ex) {
      var errResponseMsg: ResponseMessage = {
        success: false,
        message: "Cannot enter category Item Display. See error for more details",
        error: JSON.stringify(ex)
      };
      return of(errResponseMsg);
    }
  }

  addCategoryEnum(categoryEnum: string) {
    try {

      var categoryEnumObj: CategoryEnumTbl = {
        CategoryEnum: categoryEnum
      }

      const headers = { 'Content-Type': 'application/json' };
      let url = "https://omnamahshivay-api.onrender.com/addCategoryEnum"
      return this.http.post<ResponseMessage>(url, JSON.stringify(categoryEnumObj), { headers });
    } catch (ex) {
      var errResponseMsg: ResponseMessage = {
        success: false,
        message: "Cannot enter category Enum. See error for more details",
        error: JSON.stringify(ex)
      };
      return of(errResponseMsg);
    }
  }

  addLanguageEnum(languageEnum: string) {
    try {
      var languageEnumObj: LanguageEnumTbl = {
        LanguageEnum: languageEnum
      }

      const headers = { 'Content-Type': 'application/json' };
      let url = "https://omnamahshivay-api.onrender.com/addLanguageEnum"
      return this.http.post<ResponseMessage>(url, JSON.stringify(languageEnumObj), { headers });

    } catch (ex) {
      var errResponseMsg: ResponseMessage = {
        success: false,
        message: "Cannot enter languages Enum. See error for more details",
        error: JSON.stringify(ex)
      };
      return of(errResponseMsg);
    }
  }

  addAuther(auther: Auther) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      let url = "https://omnamahshivay-api.onrender.com/addAuther"
      return this.http.post<ResponseMessage>(url, JSON.stringify(auther), { headers });
    } catch (ex) {
      var errResponseMsg: ResponseMessage = {
        success: false,
        message: "Cannot add Auther. See error for more details",
        error: JSON.stringify(ex)
      };
      return of(errResponseMsg);
    }
  }

}
