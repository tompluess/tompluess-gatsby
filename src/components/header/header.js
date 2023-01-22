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
    <header className="header fixed z-20 w-full flex flex-col top-0 px-8 md:px-16 lg:px-32 pt-5 opacity-90 bg-white">
      <div className="flex flex-row justify-between content-start w-full">
        <a href="/" className="mt-1 md:mt-0">
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
