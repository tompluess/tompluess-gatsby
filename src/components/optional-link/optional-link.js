import React from 'react';
import PropTypes from 'prop-types';

const OptionalLink = ({ children, href }) => {
  const Element = href ? 'a' : 'div';
  return <Element href={href}>{children}</Element>;
};

OptionalLink.propTypes = {
  children: PropTypes.func.isRequired,
  href: PropTypes.string,
};

export default OptionalLink;
