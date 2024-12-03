import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white', // צבע רקע התחלתי
    };
  }

  // Lifecycle Method: מופעלת כשהקומפוננטה נטענת
  componentDidMount() {
    console.log('MyComponent Mounted');
  }

  // שינוי הצבע של ה-div
  changeColor = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Question 1</h2>
        <div
          style={{
            backgroundColor: this.state.backgroundColor,
            height: '150px',
            width: '60%',
            margin: '20px auto',
            border: '1px solid black',
          }}
        ></div>
        <div>
          <button onClick={() => this.changeColor('red')}>Red</button>
          <button onClick={() => this.changeColor('blue')}>Blue</button>
          <button onClick={() => this.changeColor('green')}>Green</button>
          <button onClick={() => this.changeColor('yellow')}>Yellow</button>
          <button onClick={() => this.changeColor('pink')}>Pink</button>
          <button onClick={() => this.changeColor('purple')}>Purple</button>
          <button onClick={() => this.changeColor('orange')}>Orange</button>
          <button onClick={() => this.changeColor('gray')}>Gray</button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
