import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/contact" className="text-3xl my-4">
          Kontakt
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
