import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'vant-doc-simulator',
    templateUrl: './simulator.component.html',
    styleUrls: ['./simulator.component.less']
})
export class SimulatorComponent implements OnInit {
    src:SafeHtml ='http://localhost:4201/#/mobile/button'
    constructor(private router: Router, private sanitizer: DomSanitizer) {
        
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                const urls = event.url.split('/')
                console.log(urls)
                const homeUrl = ['home','quickstart']
                let mUrl = urls[urls.length - 1]
                if(homeUrl.includes(mUrl)){
                    mUrl ='home'
                }
                this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:4201/#/mobile/${mUrl}`);
            }
        })
    }
    ngOnInit() {
    }

}
