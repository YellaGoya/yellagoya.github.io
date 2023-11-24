import { graphql } from 'gatsby';

import parse from 'html-react-parser';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from 'style/templates/Post.js';

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const thumbnailImg = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <s.Wrapper>
      <s.Post>
        <s.ThumbnailWrapper>
          <GatsbyImage image={thumbnailImg} alt="Thumbnail" />
        </s.ThumbnailWrapper>

        <s.Content>
          <s.Categories>
            {post.frontmatter.categories && post.frontmatter.categories.map((category) => <span key={category}>{category}</span>)}
          </s.Categories>
          <h1>{post.frontmatter.title}</h1>
          <article>{parse(post.html)}</article>
        </s.Content>
      </s.Post>
    </s.Wrapper>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PostTemplate;