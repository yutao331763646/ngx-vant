
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


export {
    removeNgTag
}
