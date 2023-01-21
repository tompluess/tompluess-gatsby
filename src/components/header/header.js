import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Logo from './logo'
import Nav from './nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <header className="fixed opacity-90 z-20 w-full flex flex-col top-0 px-16 bg-white">
      <div className="flex flex-row justify-between content-start w-full  max-w-screen-lg ">
          <a href="/" className="my-6">
              <Logo />
              <span className="text-2xl">{title}</span>
            </a>
        <Nav />
      </div>
    </header>
    <div className="mb-16"/>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
