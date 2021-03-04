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
        library: 'svg3d-map-cdkx', // library指定的就是你使用require时的模块名，这里便是require("svg3d-map-cdkx")
        libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
       
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
