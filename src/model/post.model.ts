import { Languages } from "../enums/languages.enum";

export interface Post{ 
    postId:number;
    postImageUrl: string;
    postTitle: string;
    postUrl: string;
    timeToRead: string;
    postDate: string;
    postContent: string;
    postLanguage:Languages
}