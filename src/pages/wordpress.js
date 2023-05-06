import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import HeadWithQuery from 'components/head';
import Item from 'components/gallery/item';

const Wordpress = ({ data }) => (
  <Layout>
    <div class="max-w-4xl">
      <Markdown>
        {data.wordpressJson.content.childMarkdownRemark.rawMarkdownBody}
      </Markdown>
      <div className="mt-8">
        <Item {...data.wordpressJson.image} />
      </div>
    </div>
  </Layout>
);

Wordpress.propTypes = {
  data: PropTypes.object.isRequired,
};

export const Head = ({ data }) => <HeadWithQuery pageTitle={data.wordpressJson.title} />

export default Wordpress;

export const query = graphql`
  query WordpressQuery {
    wordpressJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      image {
        title
        copy
        image {
          childImageSharp {
            gatsbyImageData(
              height: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
