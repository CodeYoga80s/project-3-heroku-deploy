import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import SearchResults from '../SearchResults';
import Favorite from '../Favorite'
import Navbar from '../Navbar'

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        });
      }

      componentWillUnmount() {
        this.listener();
      }

    render() {
        return (
  <Router>
    <div>
    {/* <Navigation authUser={this.state.authUser} /> */}

      <Navbar authUser={this.state.authUser}/>
      <Route authUser={this.state.authUser} exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route authUser={this.state.authUser} exact path="/search-results/:id" component={SearchResults} />
      <Route authUser={this.state.authUser} exact path="/favorites" component={Favorite} />
    </div>
  </Router>
    );
  }
}

export default withFirebase(App);