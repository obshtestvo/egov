module.exports = function (componentService) {
    var name = 'card';
    if (componentService.has(name)) return;

    componentService.register(name, {
        template: 'static/element/card/card.html',
        attached: function (scope, $el, attrs, ctrls, transclude) {
            //console.log('paper-input', $el.html())
        }
    })
}