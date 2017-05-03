import React from 'react';
import { Navbar } from 'react-bootstrap';

/**
 * Composant Header
 * @param {any} { title } 
 * @returns Header render
 */
const Header = ({ title, cpt }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {title} : {cpt}
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  </div>
);

export default Header;
