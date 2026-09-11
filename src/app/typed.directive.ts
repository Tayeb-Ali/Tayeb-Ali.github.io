import { Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, afterNextRender, inject } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Directive({
  selector: '[appTyped]',
  standalone: true,
})
export class TypedDirective implements OnChanges, OnDestroy {
  @Input() appTyped: string[] = [];
  @Input() typedSpeed = 40;
  @Input() typedLoop = true;
  @Input() typedShuffle = true;

  private el = inject(ElementRef<HTMLElement>);
  private typed: Typed | null = null;
  private rendered = false;

  constructor() {
    afterNextRender(() => {
      this.rendered = true;
      this.init();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.rendered && changes['appTyped']) {
      this.init();
    }
  }

  private init(): void {
    this.typed?.destroy();
    if (!this.appTyped?.length) return;
    const options: Partial<TypedOptions> = {
      strings: this.appTyped,
      typeSpeed: this.typedSpeed,
      loop: this.typedLoop,
      shuffle: this.typedShuffle,
    };
    this.typed = new Typed(this.el.nativeElement, options);
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
