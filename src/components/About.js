import React from 'react';
import User from './User';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }

  componentDidMount() {
    console.log('Parent componentDidMount');
  }

  render() {
    console.log('Parent Render');
    return (
      <div className="">
        <h2>Our Team</h2>
        <div className="about">
          <User
            name="Kaushal Sharma"
            role="Senior Software Engineer"
            hobby="Swimming"
          />
        </div>
      </div>
    );
  }
}

export default About;
