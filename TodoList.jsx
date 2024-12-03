import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      psychometricScore: '',
      currentField: '', // השדה הנוכחי שנמצא בפוקוס
      psychometricMessage: '', // הודעה לציון פסיכומטרי
    };
  }

  // טיפול בכניסה לשדה (onFocus)
  handleFieldFocus = (fieldName) => {
    this.setState({ currentField: fieldName });
  };

  // טיפול ביציאה מהשדה (onBlur)
  handleFieldBlur = (fieldName) => {
    const { psychometricScore } = this.state;

    // עדכון השדה הנוכחי
    this.setState({ currentField: '' });

    // אם מדובר בשדה של ציון פסיכומטרי, בצע בדיקה
    if (fieldName === 'psychometricScore') {
      if (psychometricScore !== '' && parseInt(psychometricScore) > 555) {
        this.setState({
          psychometricMessage: 'You can be accepted to the program.',
        });
      } else if (psychometricScore !== '') {
        this.setState({
          psychometricMessage: 'Please try again next year.',
        });
      } else {
        this.setState({ psychometricMessage: '' });
      }
    }
  };

  // עדכון הערכים בשדות
  handleInputChange = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  };

  render() {
    const {
      lastName,
      firstName,
      psychometricScore,
      currentField,
      psychometricMessage,
    } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Question 2</h2>

        {/* שדה שם משפחה */}
        <div style={{ marginBottom: '20px' }}>
          {currentField === 'lastName' && (
            <p style={{ color: 'red' }}>Please fill out your last name.</p>
          )}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onFocus={() => this.handleFieldFocus('lastName')}
            onBlur={() => this.handleFieldBlur('lastName')}
            onChange={(e) =>
              this.handleInputChange('lastName', e.target.value)
            }
          />
        </div>

        {/* שדה שם פרטי */}
        <div style={{ marginBottom: '20px' }}>
          {currentField === 'firstName' && (
            <p style={{ color: 'red' }}>Please fill out your first name.</p>
          )}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onFocus={() => this.handleFieldFocus('firstName')}
            onBlur={() => this.handleFieldBlur('firstName')}
            onChange={(e) =>
              this.handleInputChange('firstName', e.target.value)
            }
          />
        </div>

        {/* שדה ציון פסיכומטרי */}
        <div style={{ marginBottom: '20px' }}>
          {currentField === 'psychometricScore' && (
            <p style={{ color: 'red' }}>
              Please fill out your psychometric score.
            </p>
          )}
          <input
            type="number"
            placeholder="Psychometric Score"
            value={psychometricScore}
            onFocus={() => this.handleFieldFocus('psychometricScore')}
            onBlur={() => this.handleFieldBlur('psychometricScore')}
            onChange={(e) =>
              this.handleInputChange('psychometricScore', e.target.value)
            }
          />
          {psychometricMessage && (
            <p style={{ color: 'green', marginTop: '10px' }}>
              {psychometricMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
