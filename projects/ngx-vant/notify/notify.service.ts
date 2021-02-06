import { ComponentRef, Injectable } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyServiceModule } from './notify.service.module';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
export type OptionsType = 'danger' | 'primary' | 'success' | 'warning';
interface NotifyOptions {
    type?: OptionsType
    message: string
    duration?: number
    color?: string
    background?: string
}




export class NotifyBulderService {
    private overlayRef!: OverlayRef;
    private notifyRef!: ComponentRef<NotifyComponent> | null;
    constructor(
        private overlay: Overlay
    ) {
        this.createNotify();
    }
    createNotify() {
        this.overlayRef = this.overlay.create({
            hasBackdrop: false
        });
        this.notifyRef = this.overlayRef.attach(new ComponentPortal(NotifyComponent));

    }
    getInstance(options: NotifyOptions) {
        setTimeout(() => {
            this.close(options)
        }, options.duration)
        return this.notifyRef! && this.notifyRef!.instance;
    }
    create(options: NotifyOptions) {
        setTimeout(() => {
            Object.assign(this.notifyRef!.instance, options, {
                show: true
            });
        })
        return this.getInstance(options)
    }
    close(options: NotifyOptions) {
        this.notifyRef!.instance.show = false
        this.notifyRef = null
        setTimeout(() => {
            this.overlayRef.dispose()
        }, options.duration)
    }
}



@Injectable({ providedIn: NotifyServiceModule })
export class NotifyService {
    constructor(private overlay: Overlay
    ) {
    }
    create(options: NotifyOptions) {
        return new NotifyBulderService(this.overlay).create(options)
    }
    primary(options: NotifyOptions) {
        Object.assign(options, {
            type: 'primary'
        });
        return new NotifyBulderService(this.overlay).create(options)
    }
    success(options: NotifyOptions) {
        Object.assign(options, {
            type: 'success'
        });
        return new NotifyBulderService(this.overlay).create(options)
    }
    danger(options: NotifyOptions) {
        Object.assign(options, {
            type: 'danger'
        });
        return new NotifyBulderService(this.overlay).create(options)
    }
    warning(options: NotifyOptions) {
        Object.assign(options, {
            type: 'warning'
        });
        return new NotifyBulderService(this.overlay).create(options)
    }
}
