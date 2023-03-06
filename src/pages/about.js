import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import HeadWithQuery from 'components/head';

const About = ({ data }) => (
  <Layout>
    <div
      dangerouslySetInnerHTML={{
        __html: data.aboutJson.content.childMarkdownRemark.html,
      }}
    />
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export const Head = ({ data }) => <HeadWithQuery pageTitle={data.aboutJson.title} />

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
