import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    &copy;
    {` `}
    {/* 2019 by NamediaDigital. Pictures by{' '}
    <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
      Unsplash
    </a>
    .  */}
    Designed by{` `}
    <a href="https://namedia.digital" target="_blank" rel="noopener noreferrer">
      NamediaDigital
    </a>
    {/* .<br /> */}
    {/* Have a look at the{' '}
    <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia" target="_blank" rel="noopener noreferrer">
      Github repository
    </a>
    ! */}
  </Content>
)

export default Footer
