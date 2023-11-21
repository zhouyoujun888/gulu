# 造轮子(gulu-zhou) 一个 vue 组件

[![Build Status](https://app.travis-ci.com/zhouyoujun888/gulu.svg?branch=main)](https://app.travis-ci.com/zhouyoujun888/gulu)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1.  添加 css 样式

    使用本框架前，请在 css 中开启 border-box

    ```
    *{box-sizing:border-box;}
    *::after{box-sizing:border-box;}
    *::before{box-sizing:border-box;}
    ```

    IE 8 以上浏览器都支持此样式

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

    ```
    :root {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }
    ```

    IE 15 及以上浏览器都支持此样式

2.  安装 gulu-zhou

        ```
        npm install --save gulu-zhou
        ```

3.  引入 gulu-zhou

        ```
        import { Button, ButtonGroup, Icon } from "gulu-zhou";
        import "gulu-zhou/dist/index.css";

        export default {
          name: "App",
          components: {
            "g-button": Button,
            "g-icon": Icon,
            "g-button-group": ButtonGroup,
          },
        };
        ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
