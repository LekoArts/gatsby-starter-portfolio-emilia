const path = require('path')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const _ = require('lodash')

const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.js')

  const { error, result } = await wrapper(
    graphql(`
      {
        projects: allMdx {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              code {
                scope
              }
            }
          }
        }
      }
    `)
  )

  if (!error) {
    const projectPosts = result.data.projects.edges

    projectPosts.forEach((edge, index) => {
      const next = index === 0 ? null : projectPosts[index - 1].node
      const prev = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node

      createPage({
        path: edge.node.fields.slug,
        component: componentWithMDXScope(projectTemplate, edge.node.code.scope, __dirname),
        context: {
          slug: edge.node.fields.slug,
          absolutePathRegex: `/^${path.dirname(edge.node.fileAbsolutePath)}/`,
          prev,
          next,
        },
      })
    })
    return
  }

  console.log(error)
}
