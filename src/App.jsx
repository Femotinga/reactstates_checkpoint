
import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A passionate developer',
      imgSrc: 'profile.jpg', // Replace with the actual image URL
      profession: 'Software Engineer',
    },
    show: false,
    mountTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ mountTime: prevState.mountTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{profession}</p>
            <p>{bio}</p>
          </div>
        )}

        <p>Time since mount: {mountTime} seconds</p>
      </div>
    );
  }
}

export default App;