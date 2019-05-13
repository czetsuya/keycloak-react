var UltimaRipple = {

    init: function () {
        var $this = this;

        document.addEventListener("mousedown", function (e) {
            for (var target = e.target; target && target !== this; target = target.parentNode) {

                if (!$this.isVisible(target)) {
                    continue;
                }

                // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
                if ($this.selectorMatches(target, '.ripplelink, .p-button')) {
                    var element = target;
                    $this.rippleEffect(element, e);
                    break;
                }
            }
        }, false);
    },

    selectorMatches: function (el, selector) {
        var p = Element.prototype;
        var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    },

    isVisible: function (el) {
        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    },

    rippleEffect: function (element, e) {
        if (element.querySelector(".ink") === null) {
            var inkEl = document.createElement("span");
            this.addClass(inkEl, 'ink');

            if (this.hasClass(element, 'ripplelink'))
                element.querySelector('span').insertAdjacentHTML('afterend', "<span class='ink'></span>");
            else
                element.appendChild(inkEl);
        }

        var ink = element.querySelector(".ink");
        this.removeClass(ink, "ripple-animate");

        if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }

        var x = e.pageX - this.getOffset(element).left - (ink.offsetWidth / 2);
        var y = e.pageY - this.getOffset(element).top - (ink.offsetHeight / 2);

        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none'
        this.addClass(ink, "ripple-animate");
    },

    hasClass: function (element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    },

    addClass: function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    },

    removeClass: function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },

    getOffset: function (el) {
        var rect = el.getBoundingClientRect();

        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    }
}

document.addEventListener("DOMContentLoaded", UltimaRipple.init());