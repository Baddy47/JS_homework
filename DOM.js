class DOM {
    
    static create(tag) {
        return document.createElement(tag);
    };
    
    static attr(element, name, value) {
        if (!name & !value) return element.attributes;
        if (!value) element.getAttribute(name);
        //if (element & name & !value & del) element.removeAttribute(name);
        else  element.setAttribute(name, value);
    };
    
    static html(element, value) {
        if (!value) return element.innerHTML;
        else element.innerHTML = value;
    };
    
    static search(selector) {
        return document.querySelectorAll(selector);
    };
    
    static addClass(element, className) {
        if (!element || !className) return;
        if (!className) return element.classList.contains(className);
        else element.classList.add(className);
    };
    
    static removeClass(element, className) {
        if (!element || !className) return;
        else element.classList.remove(className);
    };
    
    static toggleClass(element, className) {
        if (!element || !className) return;
        else element.classList.toggle(className);
    };
    
    static insert(to, element, before) {
        if (!to || !element) return;
        
        if (!before) to.append(element);
        else to.insertBefore(element, before);
    };
    
    static on(element, event, func) {
        element.addEventListener(event, func());
    }
}

const $ = DOM;

let box = $.create('div');
$.insert(document.body, box);

let h1 = $.create('h1');
$.insert(box, h1);
$.html(h1, 'bla bla bla');
$.html(h1);
$.attr(h1, 'class', '5f5f5 56465 tgth');
$.on(h1, function() {
    console.log('fg');
})
