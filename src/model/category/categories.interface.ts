export interface CategoryEnumTbl {
  CategoryEnum: string,
  CategoryEnumId?: number
}

export interface CategoryEnumNotEntered {
  CategoryEnum: string,
  CategoryEnumId: number
}

export interface LanguageEnumTbl {
  LanguageEnum: string
  LanguageEnumId?: number
}

export interface Auther {
  AutherId: string;
  AutherName: string,
  AutherImageUrl: string,
  AutherForPost?: boolean
}

export interface CategoryList {
  CategoryEnumId: number;
  CategoryNameLabel: string;
  CategoryNameLabelSanskrit: string;
  DisplayOrder: string;
  IsActive: number;
}

export interface VCategoryList {
  CategoryListId: number;
  CategoryEnum: number;
  CategoryEnumId: number;
  CategoryNameLabel: string;
  CategoryNameLabelSanskrit: string;
  DisplayOrder: string;
  IsActive: number;
  ItemCount: number;
}

export interface CategoryListItem {
  CategoryListItemId: number;
  CategoryListId: number;
  ItemKey: string;
  Title: string;
  DisplayOrder: string;
  IsActive: number;
  ImageUrl: string;
}

export interface VCategoryListItem {
  CategoryListItemId: number; //PK
  CategoryListId: number; // FK
  ItemKey: string;
  Title: string;
  DisplayOrder: string;
  IsActive: number;
  AvailableLanguages: string;
  ImageUrl: string;
}

export interface CategoryItemDisplay {
  CategoryItemDisplayId: number;
  CategoryListItemId: number;
  Title: string;
  CurrentLanguageId: number;
  MarkDownFileUrl: string;
  MarkDownContent: string;
  IsActive: number;
  TimeToRead: string;
  AuthorId: number;
  ItemImageUrl?: string;
  ParmaLinkDescription?: string;
}

export interface VCategoryItemDisplay {
  CategoryItemDisplayId: number;
  CategoryListItemId: number;
  Title: string;
  CurrentLanguageId: number;
  MarkDownFileUrl: string;
  MarkDownContent: string;
  IsActive: number;
  TimeToRead: string;
  AuthorId: number;
  AutherName: string;
  AutherImageUrl: string;   
  ImageUrl?: string;
  ParmaLinkDescription?: string;
  ItemKey:string;
}