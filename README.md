# gulu 一个 VUE UI 框架

[![Build Status](https://www.travis-ci.org/FantasticPerson/vue-wheel.svg?branch=master)](https://www.travis-ci.org/FantasticPerson/vue-wheel)

## 介绍

这是我在学习 vue 过程中做的一个 UI 框架， 希望对你有用

## 开始使用

1. 添加 css 样式

    使用本框架之前，请先开启border-box

    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
    IE 8 及 以上浏览器都支持此样式

    你还需要设置默认颜色等变量 (后续会改为scss变量)
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

    IE 15 及以上浏览器支持此样式

2. 安装 gulu
    ```
    npm i gulu
    ```

3. 引入 gulu
    ```
    import {Button,GroupButton,Icon} from 'gulu'
    import 'gulu/dist/index.css'

    export default {
        name:'app',
        components:{
            'g-button':Button,
            'g-icon':Icon
        }
    }
    ```

4. 引入 svg symbols

```
<script src="//at.alicdn.com/t/font_924242_uzf4dzzvhb.js"></script>
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

作者：我



