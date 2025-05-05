import { merge } from 'theme-ui'
import baseTheme from '@lekoarts/gatsby-theme-emilia/src/gatsby-plugin-theme-ui'

export default merge(baseTheme, {
  styles: {
    root: {
      // 調慢背景和文字顏色的過渡效果，從預設速度變為 1 秒
      transition: 'background-color 1s ease, color 1s ease'
    }
  }
}) 