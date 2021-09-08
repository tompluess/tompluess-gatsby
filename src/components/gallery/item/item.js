import React from 'react';
import PropTypes from 'prop-types';
import OptionalLink from 'components/optional-link';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, href }) => (
  <OptionalLink href={href}>
    <figure>
      <GatsbyImage image={image ? getImage(image) : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
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
