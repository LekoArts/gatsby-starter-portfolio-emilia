import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.contentPadding};
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Footer = () => (
  <Content>
    &copy; 2018 by Gatsby Starter Portfolio - Emilia. Pictures by{' '}
    <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
      Unsplash
    </a>
    . Design by{' '}
    <a href="https://www.lekoarts.de/en" target="_blank" rel="noopener noreferrer">
      LekoArts
    </a>
    .<br />
    Have a look at the{' '}
    <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia" target="_blank" rel="noopener noreferrer">
      Github repository
    </a>
    !
  </Content>
)

export default Footer
