# Reseach done for e-gov UX

## Some background to make sense of the decisions made
1. Let's utilize Google Material design, there must be a good implementation somewhere
1. The project is using Polymer because of the fine-crafted paper-elements which are precise match to Google design specs but limited only to only a few components
1. The project is using Polymer so why not utilize the power of web components
1. Polymer is lacking some Google Design components so we need another library that implements those
1. There's no single library that has good implementation. We have to mix several libraries
1. The mixed libraries must have SASS styling so that we can pick only what we need
1. So far the project is using a mix of Materialize CSS and LumX libraries, only using part of the SASS
1. LumX has a better code structure: SASS files are better modularized, colors are extracted in a simpler way, there are some cool media query mixin
1. Materialize CSS has a better styling for google design "card" component
1. Ditch Materilize CSS - very limited implementation, use LumX
1. Ditch Polymer and webcomponents - very easy to reach edge cases and bugs. Webcomponents' page says technology is mature and using polyfills for firefox but it's not mature enough. Should have been stated clearly.
1. Use LumX wonderful modularized SCSS and use only what we need
1. Build our own styles looking at LumX



## Polymer & Styling related notes

If editing `egov/static/elements/materialized-element.scss`, you must edit
`materialize/sass/components/global.scss` from `materialize`
bower library (located at `egov/static/libs/materialize/sass/components/_global.scss`
after bower install) and remove the utf8 definition in the start.




If you have a template like this:
```
<link rel="import" href="../libs/polymer/polymer.html">

<polymer-element name="materialized-element" noscript>
    <template>
        <link href="materialized-element.css" rel="stylesheet">
        <content></content>
    </template>
</polymer-element>
```

And a sass file like this:
```
::content {
  @import "../libs/materialize/sass/components/prefixer.scss";
  @import "../libs/materialize/sass/components/mixins.scss";
  @import "../libs/materialize/sass/components/color.scss";
  @import "../libs/materialize/sass/components/variables.scss";
  @import "../libs/materialize/sass/components/global.scss";
  @import "../libs/materialize/sass/components/typography.scss";
  @import "../libs/materialize/sass/components/cards.scss";
}
```

Style is transferred to child elements of the custom element.


## Resources: Tips and tricks, using Polying and using Material Design

Sidenote: https://disqus.com/profile/login/ , apparently similar to our login

### Header that react to scrolling (core-scroll-header-panel)
https://www.polymer-project.org/components/core-scroll-header-panel/demo.html


### Example polymer app:
https://www.polymer-project.org/apps/topeka/
A good example of how to build a step-by-step wizard for something.
Also a good example of how to transform a grid-based tiles you can choose from
into a fullscreen wizard.

### A tool that builds merges imports of web components into a single file
https://github.com/Polymer/vulcanize


### A well-developed alternatives to polymer in regard to Google Material design implementation
Facebook reactjs implementation: https://github.com/callemall/material-ui

There are 2 implmentations of material design with CSS & Anguarjs:
- https://github.com/lumapps/lumX (also using SASS)
- Angularjs https://material.angularjs.org/

lumX is a better design spec implementation but the one from anguar team is has a larger community.

### Native CSS and Javascript implementation of Google material design
http://materializecss.com/

### Great talk on CSS side of web components and a cool flex-grid element
http://philipwalton.github.io/talks/2014-11-24/#23
http://philipwalton.github.io/talks/2014-11-24/demos/flex-grid-demo.html

### Selectize plugin theme to match material design
https://github.com/FezVrasta/bootstrap-material-design/blob/master/less/_plugin-selectize.less
Part of bootstrap theme

### Google material design spec for layouts:

http://www.google.com/design/spec/layout/metrics-keylines.html
> Awesomeness sidenote: Scroll down this page and notice how the hash in the url changes. Awesome usability detail. Now if only the window title was also changing.

Additional layouts not included in the layout page (might be out of sync):
http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button

### Reordable uneven grid
https://keep.google.com VS http://gridster.net/
Keep has much better auto positioning algorithm
slow but working: https://github.com/metafizzy/packery
way to pin/fix location of draggable element: https://twitter.com/desandro/status/369553469146816513
interesting resize on click: http://packery.metafizzy.co/methods.html#fit
http://jquer.in/tag/layout/
masonry (not-resizable, not draggable): http://indy-theme.tumblr.com/
interesting: https://github.com/maxsteenbergen/Fibonacci

### Shared styles:
https://github.com/Polymer/core-style/issues/12
especially this comment: https://github.com/Polymer/polymer/issues/1052#issuecomment-69727620
https://pascalprecht.github.io/2014/08/01/sharing-styles-across-web-components-with-polymer-and-core-style/

### Custom elements registry
http://customelements.io/

### Transitions
https://www.polymer-project.org/components/core-animated-pages/demos/nested.html


## Resarch: egov related

Polygons for country-boundaries:
https://www.google.com/fusiontables/data?docid=1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk&pli=1#rows:id=1

Google chart with maps:
https://developers.google.com/chart/image/docs/gallery/new_map_charts

Map, charts
https://github.com/mozilla/metrics-graphics
https://github.com/search?o=desc&q=chart&s=stars&type=Repositories&utf8=%E2%9C%93
http://gionkunz.github.io/chartist-js/examples.html
!!! https://github.com/benpickles/peity

favicon chart progress: http://lipka.github.io/piecon/

polymer charts: https://github.com/robdodson/chart-elements

http://plottablejs.org/components/
http://codepen.io/anon/pen/QwvPmL?editors=001
http://jsfiddle.net/wmp2y60z/6/
http://jsfiddle.net/wmp2y60z/11/
