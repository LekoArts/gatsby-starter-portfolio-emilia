const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('src/templates/project.js');
    resolve(
      graphql(`
        {
          projects: allMarkdownRemark {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                }
                frontmatter {
                  title
                  cover {
                    absolutePath
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const projectPosts = result.data.projects.edges;

        projectPosts.forEach((edge, index) => {
          const next = index === 0 ? null : projectPosts[index - 1].node;
          const prev = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node;

          createPage({
            path: edge.node.fields.slug,
            component: projectPage,
            context: {
              slug: edge.node.fields.slug,
              absolutePathRegex: `/^${path.dirname(edge.node.fileAbsolutePath)}/`,
              absolutePathCover: edge.node.frontmatter.cover.absolutePath,
              prev,
              next,
            },
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
