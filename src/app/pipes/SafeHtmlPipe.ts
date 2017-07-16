import { DomSanitizer } from '@angular/platform-browser'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
    
  constructor(private sanitized: DomSanitizer) {}

  transform(value) {

    if (value != null)
    {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
  }
}