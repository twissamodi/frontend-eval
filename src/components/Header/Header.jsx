import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="title-header">
        <h1 className="title">
          My
          <span className="main-title">
            {' '}
            <b>Record</b>
            {' '}
          </span>
          Shelf
        </h1>
      </header>
    </div>
  );
}
export default Header;
