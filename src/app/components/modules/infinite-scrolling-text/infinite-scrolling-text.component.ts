// infinite-scrolling-text.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling-text',
  template: `
    <div class="container">
      <span class="txt t1">{{ text1 }}<img src="../../../../assets/img/shape/Shape 02.svg" alt=""></span>
      <span class="txt t2">{{ text2 }}<img src="../../../../assets/img/shape/Shape 02.svg" alt=""></span>  
    </div>
  `,
  styleUrls: ['./infinite-scrolling-text.component.scss']
})
export class InfiniteScrollingTextComponent {
  @Input() text1!: string;
  @Input() text2!: string;
}
