//require('smoothScroll');
var card = require('card/card')
var scrollbar = require('scrollbar')
var marketplace = require('marketplace/marketplace')

module.exports = function (componentService) {
    card(componentService)
    scrollbar(componentService)
    marketplace(componentService)
    componentService.register('appReader', {
        template: 'static/element/app-reader.html'
    })
}