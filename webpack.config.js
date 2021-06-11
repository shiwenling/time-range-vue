const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin"); //打包去除原有的文件夹
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: NODE_ENV === 'development'? './src/main.js' : './index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/',
    filename: 'time-range-vue.js',
    library: 'time-range-vue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    // 打包去除原有的lib  具体配置可以看这个文档https://www.qdtalk.com/2018/11/17/clean-webpack-plugin/
    new CleanWebpackPlugin(["lib"]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  }
}

if (process.env.NODE_ENV === 'production') {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else{
  module.exports.devtool= '#eval-source-map'
}
