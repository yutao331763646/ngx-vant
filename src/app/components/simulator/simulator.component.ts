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
            // console.log(event)
            if (event instanceof NavigationEnd) {
                const urls = event.url.split('/')
                console.log(urls)
                this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:4201/#/mobile/${urls[urls.length - 1]}`);
            }
        })
    }
    ngOnInit() {
    }

}
