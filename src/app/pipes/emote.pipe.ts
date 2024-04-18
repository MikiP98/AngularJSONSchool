import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'emote'
})
export class EmotePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string): SafeHtml {
      // const emoteAppendedValue = value + '&#128540;';
      // return this.sanitizer.bypassSecurityTrustHtml(emoteAppendedValue);
      if (value == "&#128540;" || value == "😜") {
        return '😜';
      }
      console.error('EmotePipe: Invalid emote code:', value);
      return 'fail';
    }
}