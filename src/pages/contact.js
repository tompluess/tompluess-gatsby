import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Item from 'components/gallery/item';
import Head from 'components/head';

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <div className="mt-6" >
      <Item {...data.contactJson.image} />
    </div>
    <h1>Tom Plüss</h1>
    <p>Oberwil b. Zug</p>
    <p><a href="tel:+41786469394">+41 78 646 93 94</a></p>
    <p class="my-8">
      <a class="button" href="https://calendly.com/tompluess/treffpunkt">Termin vereinbaren</a>
    </p>
    <Markdown>
      {data.contactJson.content.childMarkdownRemark.rawMarkdownBody}
    </Markdown>
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      image {
        title
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
