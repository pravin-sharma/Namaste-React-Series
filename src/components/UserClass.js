import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Children Constructor');
  }

  componentDidMount() {
    console.log('Children componentDidMount');
  }

  componentDidUpdate() {
    console.log('Children componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Children componentWillUnmount');
  }

  render() {
    console.log('Children Render');
    const { name, role, hobby } = this.props;
    return (
      <div className="user-card-container">
        <div className="user-card">
          <p>Name: {name}</p>
          <p>Role: {role}</p>
          <p>Hobby: {hobby}</p>
          <p>Count: {this.state.count}</p>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
