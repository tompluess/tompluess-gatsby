import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';

const Gallery = ({ items }) => (
  <div className="py-8 lg:grid grid-cols-3 gap-8">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
