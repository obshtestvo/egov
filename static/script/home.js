require('zepto/zepto')
require('drop/drop');
require('magnific-popup/dist/jquery.magnific-popup');

module.exports = function() {
    var $page = $('body.home');
    if (!$page.length) return;
    var drop;
    var $fab = $(".fab");
    var $fabOverlay = $("#login-overlay");
    //drop = new Drop({
    //    target: $fab[0],
    //    content: document.querySelector('.login-tooltip'),
    //    classes: 'drop-theme-arrows-bounce-dark',
    //    position: 'top center',
    //    //openOn: null
    //    openOn: 'always'
    //});
    var drop2 = new Drop({
        target: document.querySelector('.actions .item'),
        content: document.querySelector('.sms-tooltip'),
        classes: 'drop-theme-arrows-bounce-dark',
        position: 'left middle',
        openOn: null
    });

    $fab.click(function (e) {
        if ($fab.hasClass('active')) return;
        $fab.addClass('active')
        //drop.close();
        $fabOverlay.addClass('boxmodel')
        setTimeout(function () {
            $fabOverlay.removeClass('transparent')
        }, 10)
        setTimeout(function () {
            drop2.open()
        }, 2000)
    });

    $fabOverlay.on("click.fabOut", function (event) {
        $fab.removeClass('active')
        $fabOverlay.addClass('transparent')
        setTimeout(function () {
            $fabOverlay.removeClass('boxmodel')
        }, 200)
    });
    var buttonClickHandler = function (e) {
        e.preventDefault();
        if (!$fab.hasClass('active')) return;
        $.magnificPopup.open({
            items: [
                {
                    src: $(this).attr('href'),
                    type: 'inline'
                }
            ],
            // Delay in milliseconds before popup is removed
            removalDelay: 300,

            // Class that is added to popup wrapper and background
            // make it unique to apply your CSS animations just to this exact popup
            mainClass: 'mfp-zoom-in',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
    }
    $fab.find('.primary').click(buttonClickHandler)
}