import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import HeadWithQuery from 'components/head';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <div  class="max-w-2xl">
      <Markdown>
        {data.hobbitJson.content.childMarkdownRemark.rawMarkdownBody}
      </Markdown>
    </div>
    <p class="mt-8 mb-16">
      <a class="button" href="https://subscribepage.io/hobbit">Weitere Infos</a>
    </p>
    <h2>{data.hobbitJson.titleFirst}</h2>
    <Gallery items={data.hobbitJson.galleryFirst} />
    <p class="max-w-2xl">Wenn du auch mal ein paar Tage im Zirkuswagen "Hobbit" wohnen möchtest, kannst du bei folgendem Link weitere Infos dazu bestellen:</p>
    <p class="mt-8 mb-16">
      <a class="button" href="https://subscribepage.io/hobbit">Weitere Infos</a>
    </p>
    <h2>{data.hobbitJson.titleSecond}</h2>
    <Gallery items={data.hobbitJson.gallerySecond} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const Head = ({ data }) => <HeadWithQuery pageTitle={data.hobbitJson.title} />

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
      titleFirst
      galleryFirst {
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
