# react18_ts_music
react18 + ts 仿网易云项目

# 项目初始化

npx create-react-app react18_ts_music
cd react18_ts_music
npm start

- 配置项目的icon

- 配置项目的标题

- 配置项目别名等(craco.config.ts)

- 配置tsconfig,json

# react 修改配置俩种方式

- 通过eject暴露出来配置，默认隐藏配置

- 通过插件craco，-- create-react-app config，根目录下新建craco.config.js文件配置

  ```js
  npm i -D @craco/craco
  ```
  - 根目录下`craco.config.js`创建文件，文件内容如下：

  ```js
  const path = require('path')

  // __dirname：当前目录，当前目录拼接上dir
  const resolve = (dir) => path.resolve(__dirname, dir)

  module.exports = {
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
  }
  ```
- 配置完成后，packing 中的启动脚本更改为如下内容：

  ```js
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "react-scripts eject"
    },
  ```
## 配置文件说明
1、.editorconfig：同一项目的多个开发人员维护一致的编码风格；
2、配置 prettier 使代码格式统一；
```js
npm install prettier -D
```
根目录新建 `.prettierrc` 文件，格式化规则，新建 `.prettierignore` ，配置格式化忽略文件，package 新增全局格式化命令
3、