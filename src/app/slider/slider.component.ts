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
export class SliderComponent implements AfterViewInit {
   @ViewChild('trackWrap', { static: true }) trackWrap!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollWrap', { static: true }) scrollWrap!: ElementRef<HTMLDivElement>;

  @Input() items: Array<number | string | { value: any; label?: string }> = [];
  @Input() initialIndex = 0;
  @Input() visibleCount = 3;
  @Input() minItemWidth = 120;
  @Input() hideScrollbar = true;
  @Input() autoCenterOnSelect = true;
  @Input() snapOnPointer = true;
  @Input() keyboard = true;

  @Output() indexChange = new EventEmitter<number>();
  @Output() itemChange = new EventEmitter<any>();

  selectedIndex = 0;
  itemWidth = 0;
  trackWidth = 0;
  private dragging = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.selectedIndex = this.clampIndex(this.initialIndex);
    this.calcWidths();
    setTimeout(() => this.scrollToIndexIfNeeded(this.selectedIndex, false), 0);
  }

  @HostListener('window:resize') onResize() { this.calcWidths(); }

  private calcWidths() {
    const w = Math.floor(window.innerWidth / Math.max(1, this.visibleCount));
    this.itemWidth = Math.max(this.minItemWidth, w);
    this.trackWidth = (this.items?.length || 0) * this.itemWidth;
    this.cdr.markForCheck();
  }

  onPointerDown(ev: PointerEvent) {
    if (!this.snapOnPointer) return;
    const track = this.trackWrap.nativeElement;
    track.setPointerCapture(ev.pointerId);
    this.dragging = true;
    this.setIndexFromPointer(ev.clientX);
  }

  onPointerMove(ev: PointerEvent) {
    if (!this.dragging) return;
    this.setIndexFromPointer(ev.clientX);
  }

  onPointerUp(ev: PointerEvent) {
    try { this.trackWrap.nativeElement.releasePointerCapture(ev.pointerId); } catch {}
    this.dragging = false;
    if (this.autoCenterOnSelect) this.scrollToIndexIfNeeded(this.selectedIndex, true);
  }

  onTrackClick(ev: MouseEvent) {
    this.setIndexFromPointer(ev.clientX);
    if (this.autoCenterOnSelect) this.scrollToIndexIfNeeded(this.selectedIndex, true);
  }

  private setIndexFromPointer(clientX: number) {
    const wrapper = this.scrollWrap.nativeElement;
    const trackRect = this.trackWrap.nativeElement.getBoundingClientRect();
    const localX = (clientX - trackRect.left) + wrapper.scrollLeft;
    const rawIndex = localX / this.itemWidth;
    const nearest = this.clampIndex(Math.round(rawIndex));
    this.updateSelection(nearest);
  }

  private clampIndex(i: number) {
    return Math.max(0, Math.min((this.items?.length || 1) - 1, i || 0));
  }

  private updateSelection(index: number) {
    if (index === this.selectedIndex) return;
    this.selectedIndex = index;
    this.indexChange.emit(index);
    this.itemChange.emit(this.items[index]);
    this.cdr.markForCheck();
  }

  selectIndex(index: number, center = true) {
    const idx = this.clampIndex(index);
    this.selectedIndex = idx;
    this.indexChange.emit(idx);
    this.itemChange.emit(this.items[idx]);
    if (center && this.autoCenterOnSelect) this.scrollToIndexIfNeeded(idx, true);
    this.cdr.markForCheck();
  }

  next() { this.selectIndex(this.selectedIndex + 1); }
  prev() { this.selectIndex(this.selectedIndex - 1); }

  scrollToIndexIfNeeded(index: number, smooth = true) {
    const wrapper = this.scrollWrap.nativeElement;
    const itemLeft = index * this.itemWidth;
    const itemRight = itemLeft + this.itemWidth;
    if (itemLeft < wrapper.scrollLeft || itemRight > wrapper.scrollLeft + wrapper.clientWidth) {
      const newScroll = Math.max(0, itemLeft - (wrapper.clientWidth / 2) + (this.itemWidth / 2));
      wrapper.scrollTo({ left: newScroll, behavior: smooth ? 'smooth' : 'auto' });
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKey(e: KeyboardEvent) {
    if (!this.keyboard) return;
    if (e.key === 'ArrowLeft') { this.prev(); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { this.next(); e.preventDefault(); }
  }

  labelFor(item: any) {
    if (item == null) return '';
    if (typeof item === 'object') return item.label ?? String(item.value);
    if (typeof item === 'number') return item.toLocaleString();
    return String(item);
  }
}
