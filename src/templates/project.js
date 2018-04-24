import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';

import SEO from '../components/SEO';
import ProjectHeader from '../components/ProjectHeader';
import ProjectPagination from '../components/ProjectPagination';
import config from '../../config/site';

const OuterWrapper = styled.div`
  padding: 0 ${props => props.theme.contentPadding};
  margin: -6rem auto 6rem auto;
`;

const InnerWrapper = styled.div`
  position: relative;
  max-width: ${props => props.theme.maxWidths.project}px;
  margin: 0 auto;
`;

const Project = props => {
  const { slug, next, prev } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;

  return (
    <React.Fragment>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <ProjectHeader
        avatar={config.avatar}
        name={config.name}
        date={project.date}
        title={project.title}
        areas={project.areas}
      />
      <OuterWrapper>
        <InnerWrapper>
          <Overdrive id={`${slug}-cover`}>
            <Img sizes={project.cover.childImageSharp.sizes} />
          </Overdrive>
        </InnerWrapper>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <ProjectPagination next={next} prev={prev} />
      </OuterWrapper>
    </React.Fragment>
  );
};

export default Project;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        cover {
          childImageSharp {
            sizes(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
            resize(width: 800) {
              src
            }
          }
        }
        date(formatString: "DD.MM.YYYY")
        title
        areas
      }
    }
  }
`;
