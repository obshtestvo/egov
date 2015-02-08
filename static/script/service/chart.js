var Chartist = require('chartist/dist/chartist');

module.exports = {
    generate: function (selector, animate, extraOptions, min, max) {
        var options = $.extend({
            axisX: {
                offset: 0,
                // If labels should be shown or not
                showLabel: false,
                // If the axis grid should be drawn or not
                showGrid: false,
            },
            // Options for Y-Axis
            axisY: {
                offset: 0,
                // If labels should be shown or not
                showLabel: false,
                // If the axis grid should be drawn or not
                showGrid: false,
            },
            showPoint: false,
            fullWidth: true,
            chartPadding: 0,
            lineSmooth: false,
            showArea: true
        }, extraOptions)
        var data = {series: []};
        var series = []

        if (max) {
            for (var i = 1; i < 11; i++) {
                series.push(Math.floor(Math.random() * (max - min)) + min)
            }
        } else {
            series = min;
        }
        data.series.push(series)
        data.labels = series

        var chart = new Chartist.Line(selector, data, options);
        if (animate) {
            var deCollapseUP = function (data) {
                if (data.type === 'line' || data.type === 'area') {
                    data.element.animate({
                        d: {
                            begin: 2000 * data.index,
                            dur: 2000,
                            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                            to: data.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                }
            }
            chart.on('draw', deCollapseUP);
        }
        return chart;
    }
}