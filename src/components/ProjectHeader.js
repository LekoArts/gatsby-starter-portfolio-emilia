import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import arrow from '../images/left-chevron.svg'

const Wrapper = styled.div`
  background: ${`url("${props => props.theme.bgPattern}") #000`};
  display: flex;
  position: relative;
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 2rem 1.0875rem 16rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
`

const Back = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img[data-info='back'] {
    width: 25px;
    height: 25px;
    margin: 0 1rem 0 0;
  }
`

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  img {
    border-radius: 50%;
  }
`

const Name = styled.h4`
  margin: 0 0 0 1rem;
  color: ${props => props.theme.colors.color};
`

const Details = styled.div`
  width: 100%;
  margin-top: 6rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.color};
  }

  span {
    &:not(:last-child) {
      margin-right: 0.25rem;
      &:after {
        content: ',';
      }
    }
  }
`

const Text = styled.div`
  max-width: 750px;
  margin: 4rem auto 2rem auto;
  color: white;
`

const ProjectHeader = ({ avatar, name, title, date, areas, text }) => (
  <Wrapper>
    <Content>
      <Back to="/">
        <img src={arrow} data-info="back" alt="test" />
        <Avatar>
          <img src={avatar} alt={name} />
        </Avatar>
        <Name>{name}</Name>
      </Back>
      <Details>
        <h1>{title}</h1>
        <p>{date}</p>
        <div>
          {areas.map(area => (
            <span key={area}>{area}</span>
          ))}
        </div>
        {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
      </Details>
    </Content>
  </Wrapper>
)

export default ProjectHeader

ProjectHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  areas: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
}
