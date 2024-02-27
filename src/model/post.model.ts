export interface Post {
    PostId?:number,
    Title:string,
    PostLanguage:number,
    PostContent:string,
    TimeToRead?:string,
    PostImageUrl?:string,
    PostAutherId?:number,
    PostDate?:string,
    IsActive?:number
  }
  export interface VPostDetails {
    PostId: number,
    Title: string,
    PostLanguage: number,
    PostContent: string,
    TimeToRead: string,
    PostImageUrl: string,
    PostAutherId: number,
    PostDate: string,
    IsActive: number,
    AutherName: string,
    AutherImageUrl: string
  }