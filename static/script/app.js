require('zepto/zepto');
require('angular/angular');
require('lumx/dist/js/lumx');
require('waves/dist/waves');
require('holderjs/holder');

var ComponentService = require('service/pseudo-webcomponent.directive');
var homePage = require('home');
var dashboardPage = require('dash');

var app = angular.module('egov', ['lumx'])
var componentService = new ComponentService(app);

dashboardPage(componentService);

$(function () {
    if (!('ontouchstart' in document.documentElement)) {
        $('body').addClass('single-pointer')
    }
    Waves.displayEffect();
    homePage(componentService);
})