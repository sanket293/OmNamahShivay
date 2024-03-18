import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Tags } from '../../model/tags.interface'; 
import { HttpClient } from '@angular/common/http';
import { AppUtilites } from '../../utilities/apputilities.model';

@Injectable({
  providedIn: 'root'
})

export class TagService {

  constructor(private http: HttpClient) { }

  getHomeBannerTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>(`${AppUtilites.API_BASE_URL}getHomeTags`);
  }
  getSideNavTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>(`${AppUtilites.API_BASE_URL}getSideNavTags`);
  }
}