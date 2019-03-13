import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = '5px green';
  @Input() completed: boolean;
  @HostBinding('style.borderLeft') borderLeft: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.borderLeft = this.defaultColor;
    if (this.completed) {
      this.borderLeft = this.highlightColor;
    }
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.borderLeft = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.borderLeft = this.defaultColor;
  }
}
