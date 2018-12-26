/* eslint no-unused-expressions: off */
import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { SEO, Footer } from './index'
import theme from '../../config/theme'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${theme.colors.link};
    transition: color .5s;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: ${theme.colors.linkHover};
  }

  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
