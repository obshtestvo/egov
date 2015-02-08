require('zepto/zepto');
require('baron/baron');
require('debounce');

module.exports = function (componentService) {
    var name = 'scrollbar';
    if (componentService.has(name)) return;

    componentService.register(name, {
        restrict: 'A',
        transclude: false,
        publish: {
            scrollbarShadow: '&'
        },
        created: function (scope, $el, attrs) {
            var id = attrs.scrollbar;
            var $wrapper = angular.element('<div class="scroller ' + id + '-scroller">');
            var $children = $el.children()
            $el.append($wrapper)
            $wrapper.append($children)
            $el.append('<div class="scroller__track ' + id + '-scrollbar"><div class="scroller__bar"></div></div>')
            initCustomScroll(
                $($el[0]),
                '.' + id + '-scroller',
                '.' + id + '-scrollbar',
                scope.scrollbarShadow(),
                false
            )
        }
    })
}



function initCustomScroll($el, scrollerSelector, scrollbarSelector, hasShadow, stopBubble) {
    hasShadow = typeof hasShadow == 'undefined' ? true : hasShadow;
    stopBubble = typeof stopBubble == 'undefined' ? true : stopBubble;
    baron({
        bar: scrollbarSelector + ' .scroller__bar',
        scroller: scrollerSelector,
        root: $el,
        $: Zepto
    }).controls({
        track: scrollbarSelector
    });
    var $scroller = $el.find(scrollerSelector)

    $scroller.on('scroll touchmove', $.debounce(1000, true, function () {
        $el.addClass('scrolling')
    }))
    $scroller.on('scroll touchmove', $.debounce(1000, function () {
        $el.removeClass('scrolling')
    }))
    $scroller.on('mousemove', $.debounce(1000, true, function () {
        $el.addClass('scrolling-intent')
    }))
    $scroller.on('mousemove', $.debounce(1000, function () {
        $el.removeClass('scrolling-intent')
    }))
    if (hasShadow) {
        $scroller.addClass('shadow-scroll');
        var scrollerDom = $scroller[0]
        var drawShadow = function () {
            var clientHeight, scrollHeight, scrollTop;
            scrollTop = scrollerDom.scrollTop;
            clientHeight = scrollerDom.clientHeight;
            scrollHeight = scrollerDom.scrollHeight;

            var klass = 'attop';
            if (scrollTop == 0 && !$scroller.hasClass(klass)) {
                $scroller.addClass(klass);
            } else if ($scroller.hasClass(klass)) {
                $scroller.removeClass(klass);
            }
            klass = 'atbottom';
            if (scrollTop + clientHeight >= scrollHeight && !$scroller.hasClass(klass)) {
                $scroller.addClass(klass);
            } else if ($scroller.hasClass(klass)) {
                $scroller.removeClass(klass)
            }
        }
        $scroller.scroll(drawShadow)
        drawShadow();
    }
    if (stopBubble) {
        //preventScrollBubbling($scroller)
    }
}

function preventScrollBubbling($el) {
    $el.on('DOMMouseScroll mousewheel', function (ev) {
        var $this = $(this),
            scrollTop = this.scrollTop,
            scrollHeight = this.scrollHeight,
            height = $this.height(),
            delta = (ev.type == 'DOMMouseScroll' ?
            ev.detail * -40 :
                ev.wheelDelta),
            up = delta > 0;

        var prevent = function () {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }

        if (!up && -delta > scrollHeight - height - scrollTop) {
            // Scrolling down, but this will take us past the bottom.
            $this.scrollTop(scrollHeight);
            return prevent();
        } else if (up && delta > scrollTop) {
            // Scrolling up, but this will take us past the top.
            $this.scrollTop(0);
            return prevent();
        }
    });
}