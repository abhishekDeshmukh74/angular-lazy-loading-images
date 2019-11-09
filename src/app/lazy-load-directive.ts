import { ElementRef, EventEmitter, Output, Directive, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appLazyLoad]'
})

export class DeferLoadDirective implements AfterViewInit {

    @Output() public deferLoad: EventEmitter<any> = new EventEmitter();

    private intersectionObserver?: IntersectionObserver;

    constructor(
        private element: ElementRef,
    ) { }

    public ngAfterViewInit() {
        this.intersectionObserver = new IntersectionObserver(entries => {
            this.checkForIntersection(entries);
        }, {});
        this.intersectionObserver.observe((this.element.nativeElement) as Element);
    }

    private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (this.checkIfIntersecting(entry)) {
                this.deferLoad.emit();
                this.intersectionObserver.unobserve((this.element.nativeElement) as Element);
                this.intersectionObserver.disconnect();
            }
        });
    }

    private checkIfIntersecting(entry: IntersectionObserverEntry) {
        return (entry as any).isIntersecting && entry.target === this.element.nativeElement;
    }

}
