import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Overdrive from 'react-overdrive';
import styled from 'react-emotion';

import { Layout, ProjectHeader, ProjectPagination, SEO } from 'components';
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
  const { slug, next, prev } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;

  return (
    <Layout>
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
            <Img fluid={project.cover.childImageSharp.fluid} />
          </Overdrive>
        </InnerWrapper>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <ProjectPagination next={next} prev={prev} />
      </OuterWrapper>
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    prev: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        cover {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
