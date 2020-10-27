'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths webpack dev serve 提供的
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api':{//http://localhost:8080/static/mock==>意思是说api代理到taget上的域名下的/static/mock。直接调用/api即可
        target:'http://localhost:8080',//如果需要调用后台服务器时候，则将这个本地域名改为后台开发人员电脑的Ip地址
        changeOrigin: true,
        pathRewrite: {//如果需要调用后台服务器时候，则将这个本地域名改为后台开发人员电脑的Ip地址。这个pathRewrite可以不用写了
          'api':'/static/mock'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',//表示打包上线项目的目录是后台服务器的根目录。
    // assetsPublicPath: '/project',//如果后台开发人员是把你的项目部署在服务器上的另一个文件夹中（把dist文件中的index.htm和static.css内容放project的文件夹中），
                             //则需要在这个目录下放多一层/project可以了，然后再重新打包一次项目,npm run build把dist文件夹名字改为project，最后直接把这个文件夹放到后台服务器上可以。
   
   
    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
