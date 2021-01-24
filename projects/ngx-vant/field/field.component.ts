import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { addUnit, removeNgTag } from '../utils';
export type FieldType = 'tel' | 'digit' | 'number' | 'textarea' | 'password' | 'text'

@Component({
    selector: 'van-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {

    @Input() center: boolean = false;
    @Input() icon: string = '';
    @Input() label: string = '';
    @Input() size: string = '';
    @Input() border: boolean = false;
    @Input() isLink: boolean = false;
    @Input() required: boolean = false;
    @Input() clickable: boolean = false;
    @Input() iconPrefix: string = '';
    @Input() titleStyle: { [klass: string]: any } = {};
    @Input() titleClass: string = '';
    @Input() valueClass: string = '';
    @Input() labelClass: string = '';
    @Input() title: string | number = '';
    @Input() value: string | number = '';
    @Input() arrowDirection: 'up' | 'down' | 'left' | 'right' | '' = '';

    @Input() leftIcon: string = ''
    @Input() labelAlign: 'center' | 'right' | 'left' = 'left';

    @Input()
    get labelWidth(): string | number { return this._labelWidth; }
    set labelWidth(value: string | number) {
        this._labelWidth = addUnit(value) as string;
    }
    private _labelWidth: string | number = '';


    @Input() disabled: boolean = false
    @Input() error: boolean = false
    @Input() errorMessage: string = ''
    @Input() errorMessageAlign: 'center' | 'right' | 'left' = 'left';
    @Input() inputAlign: 'center' | 'right' | 'left' = 'left';
    @Input() placeholder: string = ''
    @Input() readonly: boolean = false
    @Input() name: string = ''
    // @Input() type: FieldType = 'text'


    inputType: FieldType = 'text';
    inputMode: 'decimal' | 'numeric' | '' = ''

    @Input()
    get type(): FieldType { return this._type; }
    set type(value: FieldType) {
        this.inputType = value
        if (value === 'number') {
            this.inputType = 'text';
            this.inputMode = 'decimal';
        }

        if (value === 'digit') {
            this.inputType = 'tel';
            this.inputMode = 'numeric';
        }
        this._type = value
    }
    private _type: FieldType = 'text';

    @Input() clearable: boolean = false
    @Input() clearTrigger: 'always' | 'focus' = 'focus'
    constructor(private el: ElementRef) { }

    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }

}