import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
      <li>
        <Link to="/about">Template</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
