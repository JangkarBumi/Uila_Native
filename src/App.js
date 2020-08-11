import React, {Component} from 'react';
import Auth from './screens/Auth';
import LoggedIn from './screens/LoggedIn';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
    };
  }

  render() {
    if (!this.state.jwt) {
      return <Auth />;
    } else if (this.state.jwt) {
      return <LoggedIn />;
    }
  }
}
