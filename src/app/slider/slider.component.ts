import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('trackWrap', { static: true }) trackWrap!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollWrap', { static: true }) scrollWrap!: ElementRef<HTMLDivElement>;

  // your amounts
  amounts = [10, 20, 30, 50000, 75000, 250000];
  selectedIndex = 1;

  // layout computed
  itemWidth = 0;   // px for each item
  trackWidth = 0;  // total px

  // dragging state
  private dragging = false;

  ngAfterViewInit() {
    this.calcWidths();
    // ensure initial scroll centers selected
    setTimeout(() => this.scrollToIndexIfNeeded(this.selectedIndex, false), 0);
  }

  @HostListener('window:resize')
  onResize() { this.calcWidths(); }

  private calcWidths() {
    const minItem = 120;
    const w = Math.floor(window.innerWidth / 3);
    this.itemWidth = Math.max(minItem, w);
    this.trackWidth = this.amounts.length * this.itemWidth;
    // ensure CSS updates — Angular binding will handle it
  }

  get selectedAmount(): number { return this.amounts[this.selectedIndex]; }

  // pointer down on track -> start dragging and set capture
  onPointerDown(ev: PointerEvent) {
    const track = this.trackWrap.nativeElement;
    track.setPointerCapture(ev.pointerId);
    this.dragging = true;
    // compute immediately new index
    this.setIndexFromPointer(ev.clientX);
  }

  onPointerMove(ev: PointerEvent) {
    if (!this.dragging) return;
    this.setIndexFromPointer(ev.clientX);
  }

  onPointerUp(ev: PointerEvent) {
    const track = this.trackWrap.nativeElement;
    try { track.releasePointerCapture(ev.pointerId); } catch { /* ignore */ }
    this.dragging = false;
    // ensure visible
    this.scrollToIndexIfNeeded(this.selectedIndex, true);
  }

  // also support clicks (pointerdown already sets index) — but handle tap without move
  onTrackClick(ev: MouseEvent) {
    // calculate index from click
    this.setIndexFromPointer(ev.clientX);
    this.scrollToIndexIfNeeded(this.selectedIndex, true);
  }

  // convert clientX to nearest index considering current scrollLeft and itemWidth
  private setIndexFromPointer(clientX: number) {
    const wrapper = this.scrollWrap.nativeElement;
    const trackRect = this.trackWrap.nativeElement.getBoundingClientRect();

    // x inside the wide track (0..trackWidth)
    const localX = (clientX - trackRect.left) + wrapper.scrollLeft;
    let rawIndex = localX / this.itemWidth;
    let nearest = Math.round(rawIndex);
    nearest = Math.max(0, Math.min(this.amounts.length - 1, nearest));

    if (nearest !== this.selectedIndex) {
      this.selectedIndex = nearest;
    }
  }

  // make sure the selected item is visible in scroll area; center it optionally
  private scrollToIndexIfNeeded(index: number, smooth = true) {
    const wrapper = this.scrollWrap.nativeElement;
    const itemLeft = index * this.itemWidth;
    const itemRight = itemLeft + this.itemWidth;
    if (itemLeft < wrapper.scrollLeft || itemRight > wrapper.scrollLeft + wrapper.clientWidth) {
      const newScroll = Math.max(0, itemLeft - (wrapper.clientWidth / 2) + (this.itemWidth / 2));
      wrapper.scrollTo({ left: newScroll, behavior: smooth ? 'smooth' : 'auto' });
    }
  }
}
