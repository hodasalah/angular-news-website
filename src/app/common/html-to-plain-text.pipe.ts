import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'htmlToPlainText'
})
export class HtmlToPlainTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value:string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
