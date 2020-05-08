const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: value,
    })
  }
 }
  


// change query from allMarkDownRemark to allMdx
// added ID??  https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions 

  const postTemplate = path.resolve("src/templates/post.js")
  const tagTemplate = path.resolve("src/templates/tag.js")

  const result = await graphql(`
    {
      postsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(( post, i ) => { // previously destructured as { node }, added i for prev/next context
    const prev = posts[i - 1];
    const next = posts[i + 1];
    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
      	slug: post.node.fields.slug,
      	id: post.node.id,
      	prev,
      	next,
      }
    })
  })


  //path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue.toLowerCase())}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
//  result.data.allMdx.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/post.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//         id: node.id
//       },
//     })
//   })
// }
