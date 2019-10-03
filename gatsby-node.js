const slash = require("slash")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const posts = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (posts.errors) {
    throw new Error(posts.errors)
  }

  // Access query postss via object destructuring
  const { allSanityPost } = posts.data

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allSanityPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug.current}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
