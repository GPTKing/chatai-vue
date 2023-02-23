module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  outputDir: process.env.IS_LIB ? 'lib-dist' : 'dist',
  css: {
    extract: false
  },
  configureWebpack: {
    module: {
      rules: [
        // 配置读取 *.md 文件的规则
        // {
        //   test: /\.md$/,
        //   use: [
        //     { loader: "html-loader" },
        //     { loader: "markdown-loader", options: {} }
        //   ]
        // }
      ]
    }
  },
  devServer: {
    disableHostCheck: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8383',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader') // npm install --save-dev svg-url-loader
      .loader('svg-url-loader')

    // config.module.rule('md')
    //   .test(/\.md/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    //   .options({
    //     raw: true
    //   })
    // config.module
    //   .rule("images")
    //   .use("url-loader")
    //   .loader("url-loader")
    //   .tap(options => Object.assign(options, { limit: Infinity }));
  }
}