import { Component } from '@angular/core';

@Component({
    selector: 'mobile-root',
    template: `<router-outlet></router-outlet>`,
    styles: [
        `
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`
    ]
})
export class MobileComponent {
    title = 'ngx-vant';
}
