import React, { Component } from 'react';

class QuestionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%', // רוחב התחלתי של הטבלה
    };
  }

  // שינוי רוחב הטבלה ל-50% בלחיצה
  handleTableClick = () => {
    this.setState({ width: '50%' });
  };

  // שינוי רוחב הטבלה ל-100% בלחיצה כפולה
  handleTableDoubleClick = () => {
    this.setState({ width: '100%' });
  };

  // Lifecycle Method: הדפסה בקונסול לאחר טעינה
  componentDidMount() {
    console.log('QuestionThree Component Mounted');
  }

  render() {
    const { width } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>
          Question 3
        </h2>

        {/* טבלה */}
        <table
          style={{
            width: width,
            borderCollapse: 'collapse',
            margin: '0 auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif',
          }}
          onClick={this.handleTableClick} // אירוע לחיצה
          onDoubleClick={this.handleTableDoubleClick} // אירוע לחיצה כפולה
        >
          <thead>
            <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'center' }}>Product</th>
              <th style={{ padding: '15px', textAlign: 'center' }}>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  fontSize: '18px',
                  color: '#555',
                  textAlign: 'center',
                }}
              >
                iPhone 14
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  fontSize: '18px',
                  color: '#555',
                  textAlign: 'center',
                }}
              >
                Smartphones
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  fontSize: '18px',
                  color: '#555',
                  textAlign: 'center',
                }}
              >
                MacBook Pro
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  fontSize: '18px',
                  color: '#555',
                  textAlign: 'center',
                }}
              >
                Laptops
              </td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  fontSize: '18px',
                  color: '#555',
                  textAlign: 'center',
                }}
              >
                AirPods Pro
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  fontSize: '18px',
                  color: '#555',
                  textAlign: 'center',
                }}
              >
                Accessories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionThree;
