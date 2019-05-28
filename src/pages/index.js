import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Card, Header, Layout } from '../components'
import config from '../../config/site'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.gridColumns}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`

const Content = styled.div`
  margin: -6rem auto 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 6rem;
  position: relative;
`

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Index = ({
  data: {
    allMdx: { nodes },
  },
}) => (
  <Layout>
    <Header avatar={config.avatar} name={config.name} location={config.location} socialMedia={config.socialMedia} />
    <BG>
      <Content>
        <Grid>
          {nodes.map((project, index) => (
            <Card
              delay={index}
              date={project.frontmatter.date}
              title={project.frontmatter.title}
              cover={project.frontmatter.cover.childImageSharp.fluid}
              path={project.fields.slug}
              areas={project.frontmatter.areas}
              key={project.fields.slug}
            />
          ))}
        </Grid>
      </Content>
    </BG>
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query HomeQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          cover {
            childImageSharp {
              fluid(maxWidth: 760, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          date(formatString: "DD.MM.YYYY")
          title
          areas
        }
      }
    }
  }
`
