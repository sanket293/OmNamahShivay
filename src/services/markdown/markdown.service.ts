import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  // convert(markdown: string): string {
  //   return marked(markdown);
  // }

  async convert(markdown: string): Promise<string> {
    const result = marked(markdown);
    if (result instanceof Promise) {
      return await result;
    }
    return result;
  }
}
