import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Tags } from '../../model/tags.interface'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TagService {

  constructor(private http: HttpClient) { }

  getHomeBannerTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>("https://omnamahshivay-api.onrender.com/getHomeTags");
  }
  getSideNavTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>("https://omnamahshivay-api.onrender.com/getSideNavTags");
  }
}