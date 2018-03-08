import React from 'react';
import styled from 'styled-components';

import * as palette from '../../config/Style';

const Content = styled.p`
  color: ${palette.SECONDARY_COLOR};
  padding: 0 ${palette.CONTENT_PADDING};
  text-align: center;
`;

const Footer = () => (
  <Content>
    &copy; 2018 by Gatsby Starter Portfolio - Emma. Pictures by{' '}
    <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
      Unsplash
    </a>. Design by{' '}
    <a href="https://www.lekoarts.de" target="_blank" rel="noopener noreferrer">
      LekoArts
    </a>.
    <br />
    Have a look at the{' '}
    <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-emilia" target="_blank" rel="noopener noreferrer">
      Github repository
    </a>!
  </Content>
);

export default Footer;
