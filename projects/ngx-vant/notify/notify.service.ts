import { ComponentRef, Injectable } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyServiceModule } from './notify.service.module';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable({ providedIn: NotifyServiceModule })
export class NotifyService {
    private overlayRef!: OverlayRef;
    private notifyRef!: ComponentRef<NotifyComponent> | null;
    constructor(
        private overlay: Overlay
    ) {
        this.createNotify();
    }
    createNotify() {
        this.overlayRef = this.overlay.create({
            hasBackdrop:false
        });
        this.notifyRef = this.overlayRef.attach(new ComponentPortal(NotifyComponent));
    }
    getInstance(){
        return   this.notifyRef! && this.notifyRef!.instance;
    }
    create(){
        return this.getInstance()
    }

}
