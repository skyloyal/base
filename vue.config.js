// Vue.config.js

module.exports = {
    // 选项
    // 基本路径
    // publicPath : process.env.NODE_ENV === 'production'
    publicPath : "./",
    // 构建时的输出目录
    outputDir : "dist",
    // 放置静态资源的目录
    assetsDir : "static",
    // html的输出路径
    indexPath : "index.html",
    // 文件名哈希
    filenameHashing : true,
    // 生产环境是否生成sourceMap文件
    productionSourceMap: false,

    // css相关选项
    // css : {
    //     // 是否使用css分离插件 
    //     extract : true,
    //     // 开启CSS source maps
    //     sourceMap : false,
    //     // css预处理器配置项
    //     loaderOptions : {
    //         sass : {
    //             data : `@import "./src/styles/main.sass";`
    //         }
    //     },
    //     // 启用css modules for all css /pre-processor files
    //     requireModuleExtension : false
    // }

}