import React from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <section className="homepage-content-section">
        <h2 className="homepage-content">
          :((
          <br />
          seems a bit empty here...
        </h2>
        <Button />
      </section>

    </div>
  );
}

export default HomePage;
