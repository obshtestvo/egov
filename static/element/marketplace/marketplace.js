require('zepto/zepto')
require("packery/dist/packery.pkgd");
require('draggabilly/draggabilly');
var chart = require('service/chart');

module.exports = function (componentService) {
    var name = 'marketplace';
    if (componentService.has(name)) return;

    componentService.register(name, {
        template: 'static/element/marketplace/marketplace.html',
        attached: function (scope, $el) {
            $el = $($el[0]);
            cardLayout($el);
            chart.generate('.money-chart .ct-chart', true, {}, [5, 2, 4, 2, 0, 4, 8, 9, 5])
            chart.generate('.currency-chart .ct-chart', true, {}, [5, 2, 2, 4, 6, 4, 8, 2, 3])
            chart.generate('.security .forest .ct-chart', false, {
                high: 8,
                low: 2,
                showLine: false
            }, [8, 7, 6, 5, 7, 6, 7, 5, 8])
            chart.generate('.security .pollution .ct-chart', false, {
                high: 8,
                low: 1,
                showLine: false
            }, [1, 2, 5, 3, 2, 1, 4, 4, 1])
            chart.generate('.security .stealing .ct-chart', false, {showLine: false}, 7, 14)
        }
    })
}



var cardLayout = function ($container) {
    var pckry = new Packery($container.find('.apps')[0], {
        itemSelector: '.item',
        rowHeight: 260,
        gutter: '.gutter-sizer',
        columnWidth: '.grid-sizer'
    })
    //draggable pinnable:
    // http://codepen.io/anon/pen/Pwmmez
    var itemElems = pckry.getItemElements();
    for (var i = 0, len = itemElems.length; i < len; i++) {
        var draggie = new Draggabilly(itemElems[i], {
            handle: '.card__top'
        });
        pckry.bindDraggabillyEvents(draggie);
    }
}