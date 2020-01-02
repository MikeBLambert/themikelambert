const path = require(`path`);
const slug = require(`slug`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              url
              title
              article {
                json
              }
            }
          }
        }
        allContentfulAsset {
          nodes {
            file {
              url
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const PostDetail = path.resolve(`src/components/blog/PostDetail.js`);

  result.data.allContentfulBlogPost.edges.forEach((edge, index) => {
    const kebabTitle = edge.node.title.split(' ').join('-');

    createPage({
      path: `/blog/${slug(kebabTitle)}/`,
      component: slash(PostDetail),
      context: {
        id: edge.node.id,
        title: edge.node.title,
        article: edge.node.article,
        image: result.data.allContentfulAsset.nodes[index].file.url,
      },
    });
  });
};
