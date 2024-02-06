import { Observable } from "rxjs";
import { CategoryCardInfo } from "./category-card-info.model";

export interface CategoryListItem{

    itemText: string  ;//Main title of the page
    postTitle: string  ;//title above the item
    categoryCardInfo$:Observable<CategoryCardInfo[]>;
  
  }