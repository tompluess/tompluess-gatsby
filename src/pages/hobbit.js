import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.hobbitJson.title}
      </Title>
      <Markdown className="text-3xl font-light">
        {data.hobbitJson.content.childMarkdownRemark.rawMarkdownBody}
      </Markdown>{' '}
    </Box>
    <Gallery items={data.hobbitJson.gallery} />
    <Box>
      <Title as="h2" size="large">
        {data.hobbitJson.titleSecond}
      </Title>
    </Box>
    <Gallery items={data.hobbitJson.gallerySecond} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    hobbitJson(slug: {eq: "hobbit"}) {
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
