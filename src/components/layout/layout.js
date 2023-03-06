import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/header';
import "./layout.css";

const Layout = ({ data, children }) => (
  <div class="flex justify-center">
    <Header title={data.site.siteMetadata.siteTitle} />
    <div class="w-full max-w-screen-2xl px-2 sm:px-6 md:px-16 lg:px-32 pt-32">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};


export default LayoutWithQuery;
