import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamelPipe } from './camel.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    CamelPipe
  ],
  exports: [HighlightDirective, CamelPipe, CommonModule],
  providers: [],
})
export class SharedModule { }
