# 安装及使用


您可以通过 [NPM](https://www.npmjs.com/)、[YARN](https://yarnpkg.com/) 或者通过 `<script>` 的方式引入 [unpkg.com](https://unpkg.com/) 上的包；稳定版 <a href="https://www.npmjs.com/package/@buession/shiro" target="_blank"><img src="https://img.shields.io/npm/v/@buession/shiro" alt="Version" /></a>。


### NPM

```sh
npm install @buession/shiro
# or
yarn add @buession/shiro
```


### 浏览器引入

> 在浏览器中使用 script 标签直接引入文件，并使用全局类。
> 我们在 npm 发布包内的 @buession/shiro/dist 目录下提供了 shiro.amd.js、shiro.cjs.js、shiro.esm.js、shiro.iife.js、shiro.umd.js、shiro.js 以及对应 shiro.amd.min.js、shiro.cjs.min.js、shiro.esm.min.js、shiro.iife.min.js、shiro.umd.min.js、shiro.min.js ；其中，shiro.js、shiro.min.js 等同于 shiro.umd.js 和 shiro.umd.min.js。
> 您也可以通过 <a href="https://unpkg.com/@buession/shiro/" target="_blank">unpkg</a> 或 <a href="https://www.jsdelivr.com/package/npm/@buession/shiro" target="_blank"><img src="https://data.jsdelivr.com/v1/package/npm/@buession/shiro/badge" alt="Download" /></a> 进行下载。
> 对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。

```html
最新版：<script src="https://unpkg.com/@buession/shiro/dist/shiro.min.js" type="text/javascript"></script>
具体版本：<script src="https://unpkg.com/@buession/shiro@版本/dist/shiro.min.js" type="text/javascript"></script>
```