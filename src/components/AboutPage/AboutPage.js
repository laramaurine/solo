import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <h1>it puts the lotion on it's skin</h1>
        <h4>What is it?</h4>
      <p>This app is a skin care product tracking app</p>
      <p>It will track how often you put lotion on your skin</p>
    </div>
  </div>
);

export default AboutPage;
