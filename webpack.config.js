var webpack = require('webpack');

module.exports = {
    entry: {
        app: 'app',
        //vendors: [
        //    //'./static/lib/angular/angular',
        //    //'./static/lib/jquery/dist/jquery',
        //    //__dirname + '/static/lib/drop/drop',
        //]
    },
    output: {
        path: __dirname + '/static/script',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    cache: false,
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    resolve: {
        root: [
            __dirname + '/static/script',
            __dirname + '/static/lib',
            __dirname + '/static/element',
        ],
        alias: {
            'jquery': 'jquery/dist/jquery',
        },
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    },
    module: {
        loaders: [
            { test: /packery|draggabilly|drop\/drop|debounce|holderjs\/holder/, loader: "imports?this=>window&module=>false&exports=>false&define=>false" }
        ],
        noParse: [
            /packery/,
            /draggabilly/,
            /zepto/,
            /angular/,
            /drop\/drop/,
            /dist\/waves/,
            /throttle-debounce/,
            /holderjs\/holder/,
            /lumx/,
        ]
    }
};
