import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import HeadWithQuery from 'components/head';
import Item from 'components/gallery/item';
import { graphql } from 'gatsby';

const Gallery = ({ items }) => (
  <div className="grid-cols-3 gap-8 py-8 lg:grid">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </div>
);

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

export const Head = ({ data }) => <HeadWithQuery pageTitle={data.homeJson.title} />

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
