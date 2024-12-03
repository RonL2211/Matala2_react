import React, { Component } from 'react';
import MyComponent from './MyComponent';
import TodoList from './TodoList';
import QuestionThree from './QuestionThree';

class App extends Component {
  componentDidMount() {
    console.log('App Component Mounted');
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>React Questions</h1>
        <MyComponent /> {/* Question 1 */}
        <TodoList /> {/* Question 2 */}
        <QuestionThree /> {/* Question 3 */}
      </div>
    );
  }
}

export default App;
