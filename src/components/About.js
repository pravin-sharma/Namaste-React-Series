import React from 'react';
import UserClass from './UserClass';

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
      <div className="about">
        {/* <h1>About Page</h1>
        <h2>Our Team:</h2> */}
        <UserClass
          name="Kaushal Sharma"
          role="Senior Software Engineer"
          hobby="Swimming"
        />
      </div>
    );
  }
}

export default About;
