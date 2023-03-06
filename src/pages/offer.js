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
    <Markdown>
      {data.offerJson.content.childMarkdownRemark.rawMarkdownBody}
    </Markdown>
    <p class="mt-8 mb-16">
      <a class="button" href="https://calendly.com/tompluess/consulting">Termin vereinbaren</a>
    </p>
    <div className="mt-8">
      <Item {...data.offerJson.image} />
    </div>
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
