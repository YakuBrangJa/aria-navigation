const utils = {
  matches (element: HTMLElement, selector: string) {
    // if(!Element.prototype.matches) {
    //   Element.prototype.matches =
    //     Element.prototype.matchesSelector ||
    //     Element.prototype.mozMatchesSelector ||
    //     Element.prototype.msMatchesSelector ||
    //     Element.prototype.oMatchesSelector ||
    //     Element.prototype.webkitMatchesSelector ||
    //     function (s) {
    //       var matches = element.parentNode.querySelectorAll(s);
    //       var i = matches.length;
    //       while(--i >= 0 && matches.item(i) !== this) {
    //         // empty
    //       }
    //       return i > -1;
    //     };
    // }

    return element.matches(selector);
  },

  isFocusable (element: HTMLElement) {
    if(element.tabIndex < 0) {
      return false;
    }

    // @ts-ignore
    if(element.disabled) {
      return false;
    }

    switch(element.nodeName) {
      case "A":
        // @ts-ignore
        return !!element.href && element.rel != "ignore";
      case "INPUT":
        // @ts-ignore
        return element.type != "hidden";
      case "BUTTON":
      case "SELECT":
      case "TEXTAREA":
        return true;
      default:
        return false;
    }
  },

  getAncestorBySelector (element: HTMLElement, selector: string) {
    if(this.matches(element, selector + " " + element.tagName)) {
      // Element is not inside an element that matches selector
      return null;
    }

    // Move up the DOM tree until a parent matching the selector is found
    var currentNode = element;
    var ancestor = null;
    while(ancestor === null) {

      if(this.matches(currentNode.parentNode as HTMLElement, selector)) {
        ancestor = currentNode.parentNode;
      } else {
        currentNode = currentNode.parentNode as HTMLElement;
      }
    }

    return ancestor;
  },

  hasClass (element: Element, className: string) {
    return new RegExp("(\\s|^)" + className + "(\\s|$)").test(element.className);
  },

  findClosest (element: HTMLElement, selector: string) {
    if(this.matches(element, selector)) {
      return element;
    }

    if(this.matches(element.parentNode as HTMLElement, selector)) {
      return element.parentNode;
    }

    return element.querySelector(selector);
  }

}

export default utils