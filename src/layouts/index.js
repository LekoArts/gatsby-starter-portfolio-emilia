import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import favicon from './favicon.ico';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

/* eslint no-unused-expressions: off */
injectGlobal`
  body {
    background: #16191f;
    color: ${palette.COLOR};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${palette.LINK_COLOR};
    transition: color .5s;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: ${palette.LINK_HOVER_COLOR};
  }

  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
  }
`;

const TemplateWrapper = (props) => {
  const { children } = props;

  return (
    <div>
      <Helmet
        title={config.siteTitleAlt}
        meta={[
            { name: 'description', content: 'Gatsby Starter Portfolio - Emilia' },
            { name: 'keywords', content: 'gatsby, starter, portfolio, lekoarts' },
          ]}
      >
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <SEO />
      {children()}
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
