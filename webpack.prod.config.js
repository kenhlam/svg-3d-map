const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { merge } = require('webpack-merge');
const baseCfg = require('./webpack.base.config.js');
module.exports = merge(baseCfg, {
    mode: "production",
    entry: "./src/lib/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'svg3d-map-cdkx', 
        libraryTarget: 'umd', 
        umdNamedDefine: true 
       
    },
    plugins: [
       
        new BundleAnalyzerPlugin({
            analyzerPort:"auto"
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }

        ]
    }
})
