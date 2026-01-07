export const isBrowser = typeof window !== 'undefined';

export const webOrigin = () => {
    if (isBrowser) {
        return window.location.origin
    }
}
export const isHash = () => {
    if (isBrowser) {
        const hash = window.location.hash
        if (!hash) {
            return true
        }
    }
}

export const smoothScroller = (id, offSet) => {
    if (isBrowser) {
        window.scrollTo({
            top: document.getElementById(id)?.offsetTop - offSet,
            behavior: 'smooth'
        })
    }
}

export const isNumber = (evt) => {
    if (isBrowser) {
        evt = evt || window.event;
        const charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
};