/* eslint no-unused-expressions: off */
import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import { SEO, Footer } from 'components';
import theme from '../../config/theme';

injectGlobal`
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
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      {children}
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
