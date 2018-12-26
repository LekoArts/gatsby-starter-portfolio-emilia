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
  margin: -6rem auto 6rem auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 1.45rem;
  position: relative;
`

const Index = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout>
    <Header avatar={config.avatar} name={config.name} location={config.location} socialMedia={config.socialMedia} />
    <Content>
      <Grid>
        {edges.map(project => (
          <Card
            date={project.node.frontmatter.date}
            title={project.node.frontmatter.title}
            cover={project.node.frontmatter.cover.childImageSharp.fluid}
            path={project.node.fields.slug}
            areas={project.node.frontmatter.areas}
            key={project.node.fields.slug}
          />
        ))}
      </Grid>
    </Content>
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query HomeQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90) {
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
  }
`
