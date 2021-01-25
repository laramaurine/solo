import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <h1>Lara's Skincare Tracking App</h1>
        <h4>What is it?</h4>
      <p>This app is a skin care product tracking app</p>
      <p>It will track how often you use products and your review of the products</p>
      <br></br>
      <h4>Why did I make this app?</h4>
      <p>About ten years ago, I sustained second and third degree burns on half of my face and struggled finding skin care products that were effective in</p>
      <p>keeping my skin moisturized and feeling like normal skin.</p>
      <p>Living in Minnesota, I know many of us have different skin care regimes for different seasons and this app will help track what products work.</p>
    <br></br>
    <h4>Technology Used</h4>
    <p>React, PostgreSQL, Node</p>
    <br></br>
    <h4>Future Plans</h4>
    <p>I plan to add a search function and to allow for multiple users</p>
    </div>
  </div>
);

export default AboutPage;
