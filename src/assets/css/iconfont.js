/*
 * @Author: hypocrisy
 * @Date: 2021-05-06 00:39:15
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-06 01:48:45
 * @FilePath: /orange/src/assets/css/iconfont.js
 */
import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2527608 */
  src: url('../iconfont/iconfont.woff2?t=1620234598921') format('woff2'),
       url('../iconfont/iconfont.woff?t=1620234598921') format('woff'),
       url('../iconfont/iconfont.ttf?t=1620234598921') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before {
  content: "\\e61d";
}


`
