export interface CategoryEnumTbl {
  CategoryEnum: string,
  CategoryEnumId: number
}

export interface CategoryEnumNotEntered {
  CategoryEnum: string,
  CategoryEnumId: number
}

export interface LanguageEnumTbl {
  LanguageEnum: string
  LanguageEnumId: number
}

export interface Auther {
  AutherId: string;
  AutherName: string,
  AutherImageUrl: string
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
}

export interface VCategoryListItem {
  CategoryListItemId: number; //PK
  CategoryListId: number; // FK
  ItemKey: string;
  Title: string;
  DisplayOrder: string;
  IsActive: number;
  AvailableLanguages: string;
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
  AutherImageUr: string;
}
