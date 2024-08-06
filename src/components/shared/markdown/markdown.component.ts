import { Component, Input, OnChanges } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { MarkdownService } from '../../../services/markdown/markdown.service';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent implements OnChanges {
  @Input() markdown: string | undefined = '';
  htmlContent: SafeHtml = '';

  constructor(private markdownService: MarkdownService, private sanitizer: DomSanitizer) { }

  async ngOnChanges() {
    const html = await this.markdownService.convert(this.markdown ?? "");
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
    // this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(await this.markdownService.convert(this.markdown));
  }
}
