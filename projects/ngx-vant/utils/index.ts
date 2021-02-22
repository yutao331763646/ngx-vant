function isWindow(val: unknown): val is Window {
    return val === window;
}
type ScrollElement = HTMLElement | Window;
const removeNgTag = (nativeElement: HTMLElement): void => {
    const parentElement = nativeElement.parentElement
    if (!parentElement || !parentElement.insertBefore) return
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement)
    }
    parentElement.removeChild(nativeElement)
}
export function isNumeric(val: string): boolean {
    return /^\d+(\.\d+)?$/.test(val);
}
export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}
export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }

    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
}
export function getScrollTop(el: ScrollElement): number {
    const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

    // iOS scroll bounce cause minus scrollTop
    return Math.max(top, 0);
}
export function getRootScrollTop(): number {
    return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    );
}
// get distance from element top to page top or scroller top
function getElementTop(el: ScrollElement, scroller?: HTMLElement) {
    if (isWindow(el)) {
        return 0;
    }

    const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
    return el.getBoundingClientRect().top + scrollTop;
}
let prev = Date.now();
const root = (false ? '' : window) as Window;
/* istanbul ignore next */
function fallback(fn: FrameRequestCallback): number {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}
const iRaf = root.requestAnimationFrame || fallback;
function raf(fn: FrameRequestCallback): number {
    return iRaf.call(root, fn);
}
export function setScrollTop(el: ScrollElement, value: number) {
    if ('scrollTop' in el) {
        el.scrollTop = value;
    } else {
        el.scrollTo(el.scrollX, value);
    }
}
function scrollTopTo(
    scroller: HTMLElement,
    to: number,
    duration: number,
    callback: Function
) {
    let current = getScrollTop(scroller);

    const isDown = current < to;
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
    const step = (to - current) / frames;

    function animate() {
        current += step;

        if ((isDown && current > to) || (!isDown && current < to)) {
            current = to;
        }

        setScrollTop(scroller, current);

        if ((isDown && current < to) || (!isDown && current > to)) {
            raf(animate);
        } else if (callback) {
            raf(callback as FrameRequestCallback);
        }
    }

    animate();
}
const overflowScrollReg = /scroll|auto/i;
function getScroller(el: HTMLElement, root: ScrollElement = window) {
    let node = el;

    while (
        node &&
        node.tagName !== 'HTML' &&
        node.tagName !== 'BODY' &&
        node.nodeType === 1 &&
        node !== root
    ) {
        const { overflowY } = window.getComputedStyle(node);
        if (overflowScrollReg.test(overflowY)) {
            return node;
        }
        node = node.parentNode as HTMLElement;
    }

    return root;
}
const iCancel = root.cancelAnimationFrame || root.clearTimeout;

export function cancelRaf(id: number) {
    iCancel.call(root, id);
}
let scrollLeftRafId: number;

function scrollLeftTo(
    scroller: HTMLElement,
    to: number,
    duration: number
) {
    cancelRaf(scrollLeftRafId);

    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

    function animate() {
        scroller.scrollLeft += (to - from) / frames;

        if (++count < frames) {
            scrollLeftRafId = raf(animate);
        }
    }

    animate();
}
export {
    removeNgTag, getElementTop, scrollTopTo, getScroller,
    scrollLeftTo
}
