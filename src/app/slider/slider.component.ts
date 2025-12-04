import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

export type ScrollerItem = { value: number | string; label?: string };

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
   @Input() min = 50000;
  @Input() max = 250000;
  @Input() step = 20000;
  @Input() prefix = '$';
  @Input() value = this.min;
  @Output() valueChange = new EventEmitter<number>();

  percent = 0; // thumb position (0–100)

  ngOnInit() {
    this.updatePercent(this.value);
  }

  onChange(v: number | null) {
    if (v == null) return;
    this.value = v;
    this.updatePercent(v);
    this.valueChange.emit(v);
  }

  private updatePercent(v: number) {
    this.percent = ((v - this.min) * 100) / (this.max - this.min);
  }

  // slider.component.ts
onInput(event: any) {
  const v = event.value as number;   // mat-slider gives { value: number }
  if (v == null) return;
  this.value = v;
  this.updatePercent(v);
  this.valueChange.emit(v);
}

}
