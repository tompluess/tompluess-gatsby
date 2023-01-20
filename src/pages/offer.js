import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Item from 'components/gallery/item';
import Head from 'components/head';

const Offer = ({ data }) => (
  <Layout>
    <Head pageTitle={data.offerJson.title} />
    <Markdown className="text-2xl">
      {data.offerJson.content.childMarkdownRemark.rawMarkdownBody}
    </Markdown>
    <Item {...data.offerJson.image} />
  </Layout>
);

Offer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Offer;

export const query = graphql`
  query OfferQuery {
    offerJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      image {
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
