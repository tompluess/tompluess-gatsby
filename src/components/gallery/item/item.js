import React from 'react';
import PropTypes from 'prop-types';
import OptionalLink from 'components/optional-link';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Item = ({ title, copy, image, href }) => (
  <OptionalLink href={href}>
    <figure>
      <GatsbyImage image={image ? getImage(image) : {}} alt={title} />
      <figcaption>
        <div className="text-l font-medium my-4">{title}</div>
        <div className="text-l font-extralight mt-4 mb-8">{copy}</div>
      </figcaption>
    </figure>
  </OptionalLink>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  href: PropTypes.string,
};

export default Item;
