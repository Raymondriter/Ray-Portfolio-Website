import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Raymond Riter',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Aspiring in, Development/Cyber Security',
        subTitle: 'Projects, accomplishments that make a difference',
        text: 'Check my techistory below'
      },
      about: {
        title: 'About Me',
        subTitle: 'Projects, accomplishments that make a difference',
        text: 'Check my techistory below'
      },
      contact: {
        title: 'Let\'s Talk!'
      }
    }
  }

  render() {
    return (
        <div>Hello from React</div>
    );
  }

}

export default App;
