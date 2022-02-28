import React, { Component, Fragment } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TutorialHeader />
        <Body />
      </Fragment>
    );
  }
}

export default App;
