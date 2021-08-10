import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'vant-doc-simulator',
    templateUrl: './simulator.component.html',
    styleUrls: ['./simulator.component.less']
})
export class SimulatorComponent implements OnInit {
    src:SafeHtml ='https://www.yutaooo.com/#/mobile/button'
    constructor(private router: Router, private sanitizer: DomSanitizer) {
        
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                const host = window.location.href.split('/#/')
                const urls = event.url.split('/')
                const homeUrl = ['home','quickstart','theme','contribution','design','style-guide','locale']
                let mUrl = urls[urls.length - 1]
                if(homeUrl.includes(mUrl)){
                    mUrl ='home'
                }
                // 从url获取国际化拼接移动端demo的url
                this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${host[0]}/#/${host[1].split('/')[0]}/mobile/${mUrl}`);
            }
        })
    }
    ngOnInit() {
    }

}
