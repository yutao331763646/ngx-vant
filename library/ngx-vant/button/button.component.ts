import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { VantI18nService } from 'ngx-vant/i18n';
import { LoadingType } from 'ngx-vant/loading';
import { removeNgTag } from 'ngx-vant/utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

@Component({
    selector: 'van-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit, OnChanges {
    @Output() readonly click = new EventEmitter<MouseEvent>();
    @Output() readonly touchstart = new EventEmitter<TouchEvent>();
    @Input() type: ButtonType = 'default';
    @Input() size: ButtonSize = 'normal';
    @Input() round: boolean = false;
    @Input() square: boolean = false;
    @Input() disabled: boolean = false;
    @Input() hairline: boolean = false;
    @Input() loading: boolean = false;
    @Input() loadingSize: string = '20px'
    @Input() loadingType: LoadingType = 'circular'
    @Input() loadingText: string = ''
    @Input() block: boolean = false;
    @Input() icon: string = ''
    @Input() iconPrefix: string = 'left'
    @Input() nativeType: string = ''
    @Input()
    get color(): string { return this._color; }
    set color(value: string) {
        this._color = value;
    }
    private _color: string = '';

    @Input()
    get plain(): boolean { return this._plain; }
    set plain(value: boolean) {
        this._plain = value;
    }
    private _plain: boolean = false;
    private _unSubject = new Subject<void>();
    colorStyle: any = {}
    constructor(
        private elementRef: ElementRef,
        public cdr: ChangeDetectorRef,
        private vantI18nService:VantI18nService) { }
    ngOnInit() {
        removeNgTag(this.elementRef.nativeElement)
        this.vantI18nService.localeChange.pipe(takeUntil(this._unSubject)).subscribe(() => this.cdr.markForCheck());

    }
    onClick(e: MouseEvent): void {
        this.click.emit(e);
    }
    onTouchstart(e: TouchEvent): void {
        this.touchstart.emit(e)
    }
    ngOnDestory() {
        this._unSubject.next();
        this._unSubject.unsubscribe();
      }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.color) {
            this.colorStyle.color = this.plain ? changes.color.currentValue : 'white'
            if (!changes.plain) {
                this.colorStyle.background = changes.color.currentValue
            }
            if (changes.color.currentValue.indexOf('gradient') !== -1) {
                this.colorStyle.border = 0
            } else {
                this.colorStyle.borderColor = changes.color.currentValue

            }
        }
    }
}
