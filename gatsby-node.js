const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        image: File @fileByRelativePath
      }
    `
    createTypes(typeDefs)
  }

  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions // highlight-line
    const postTemplate = path.resolve(`./src/templates/post.js`)
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

        
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
        path: node.fields.slug,
        component: postTemplate ,
        context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
        },
        })
    })
  

  }