function homePage() {
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

function dashboardPage() {
    var $page = $('body.dash');
    if (!$page.length) return;

    var $marketplace = $('#marketplace')
    var pckry = new Packery($marketplace.find('.apps')[0], {
        itemSelector: '.item',
        rowHeight: 250,
        gutter: '.gutter-sizer',
        columnWidth: '.grid-sizer'
    })
    //draggable pinnable:
    // http://codepen.io/anon/pen/Pwmmez
    var itemElems = pckry.getItemElements();
    console.log(itemElems)
    // for each item element
    for (var i = 0, len = itemElems.length; i < len; i++) {
        var elem = itemElems[i];
        // make element draggable with Draggabilly
        var draggie = new Draggabilly(elem, {
            //handle: 'paper-card /deep/ .card__top'
        });
        // bind Draggabilly events to Packery
        pckry.bindDraggabillyEvents(draggie);
    }
}


$(function () {
    Waves.displayEffect();
    homePage();
    dashboardPage();
})