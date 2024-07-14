const APP_NAME = require('./package.json').name;
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    // 之应用同源策略忽略
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 两个按需导入element组件的插件
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        // "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // 乾坤匹配主应用配置
      library: `${APP_NAME}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${APP_NAME}`,
    },
  },
});
