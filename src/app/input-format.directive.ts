import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputFormat]',
  standalone: true, // Use standalone if you are on Angular 14 or above
})
export class InputFormatDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase(); // Convert text to uppercase on blur
  }
}
