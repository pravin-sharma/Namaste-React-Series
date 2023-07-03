import React from 'react';
import User from './User';

const About = () => {
  return (
    <>
      <h2>Our Team</h2>
      <div className="user-card-container">
        <User
          name="Kaushal Sharma"
          role="Senior Software Engineer"
          hobby="Swimming"
        />
      </div>
    </>
  );
};

export default About;
