import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';

const Gallery = ({ items }) => (
  <div className="grid-cols-2 gap-8 py-8 md:grid xl:grid-cols-3">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
