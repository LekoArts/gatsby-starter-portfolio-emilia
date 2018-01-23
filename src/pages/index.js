import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Header from '../components/Header';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${palette.GRID_COLUMNS}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper, .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled.div`
  margin: -6rem auto 6rem auto;
  max-width: ${palette.MAX_WIDTH}px;
  padding: 0px ${palette.CONTENT_PADDING} 1.45rem;
  position: relative;
`;

const Index = (props) => {
  const projectEdges = props.data.allMarkdownRemark.edges;

  return (
    <div>
      <Header
        avatar={config.avatar}
        name={config.name}
        location={config.location}
        socialMedia={config.socialMedia}
      />
      <Content>
        <Grid>
          {projectEdges.map(project => (
            <Card
              date={project.node.frontmatter.date}
              title={project.node.frontmatter.title}
              cover={project.node.frontmatter.cover.childImageSharp.sizes}
              path={project.node.fields.slug}
              areas={project.node.frontmatter.areas}
              slug={project.node.fields.slug}
              key={project.node.fields.slug}
            />
        ))}
        </Grid>
      </Content>
    </div>
  );
};

export default Index;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#328bff" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            date
            title
            areas
          }
        }
      }
    }
  }
`;
