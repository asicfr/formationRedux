import React from 'react';
import { Navbar } from 'react-bootstrap';

/**
 * Composant Header
 * @param {any} { title } 
 * @returns Header render
 */
const Header = ({ title }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {title}
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  </div>
);

export default Header;
