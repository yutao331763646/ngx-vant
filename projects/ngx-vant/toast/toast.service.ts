import { Injectable } from '@angular/core';
import { ToastServiceModule } from './toast.service.module';

@Injectable({
    providedIn: ToastServiceModule
})
export class ToastService {

    constructor() { }
    success(content: string) {
        console.log(content)
    }

}
