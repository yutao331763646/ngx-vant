/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Directive, EmbeddedViewRef, Input, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
export type safeAny = any;


@Directive({
    selector: '[vanTemplateOutlet]',
    exportAs: 'vanTemplateOutlet'
})
export class vanTemplateOutletDirective<_T = unknown> implements OnChanges {
    private embeddedViewRef: EmbeddedViewRef<safeAny> | null = null;
    private context = new vanTemplateOutletContext();
    @Input() vanTemplateOutletContext: safeAny | null = null;
    @Input() vanTemplateOutlet: safeAny | TemplateRef<safeAny> = null;

    static ngTemplateContextGuard<T>(_dir: vanTemplateOutletDirective<T>, _ctx: safeAny): _ctx is vanTemplateOutletContext {
        return true;
    }

    private recreateView(): void {
        this.viewContainer.clear();
        const isTemplateRef = this.vanTemplateOutlet instanceof TemplateRef;
        const templateRef = (isTemplateRef ? this.vanTemplateOutlet : this.templateRef) as safeAny;
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(
            templateRef,
            isTemplateRef ? this.vanTemplateOutletContext : this.context
        );
    }

    private updateContext(): void {
        const isTemplateRef = this.vanTemplateOutlet instanceof TemplateRef;
        const newCtx = isTemplateRef ? this.vanTemplateOutletContext : this.context;
        const oldCtx = this.embeddedViewRef!.context as safeAny;
        if (newCtx) {
            for (const propName of Object.keys(newCtx)) {
                oldCtx[propName] = newCtx[propName];
            }
        }
    }

    constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<safeAny>) { }

    ngOnChanges(changes: SimpleChanges): void {
        const { vanTemplateOutletContext, vanTemplateOutlet } = changes;
        const shouldRecreateView = (): boolean => {
            let shouldOutletRecreate = false;
            if (vanTemplateOutlet) {
                if (vanTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                } else {
                    const isPreviousOutletTemplate = vanTemplateOutlet.previousValue instanceof TemplateRef;
                    const isCurrentOutletTemplate = vanTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            const hasContextShapeChanged = (ctxChange: SimpleChange): boolean => {
                const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                const currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    for (const propName of currCtxKeys) {
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return true;
                }
            };
            const shouldContextRecreate = vanTemplateOutletContext && hasContextShapeChanged(vanTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        };

        if (vanTemplateOutlet) {
            this.context.$implicit = vanTemplateOutlet.currentValue;
        }

        const recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        } else {
            /** update context **/
            this.updateContext();
        }
    }
}

export class vanTemplateOutletContext {
    public $implicit: safeAny;
}
