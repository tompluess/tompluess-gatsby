import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Markdown className="text-xl font-light">
      {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
    </Markdown>{' '}
    <Gallery items={data.homeJson.gallery} />
      <h2>
        {data.homeJson.titleSecond}
      </h2>
    <Gallery items={data.homeJson.gallerySecond} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            gatsbyImageData(
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      titleSecond
      gallerySecond {
        title
        copy
        href
        image {
          childImageSharp {
            gatsbyImageData(
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
