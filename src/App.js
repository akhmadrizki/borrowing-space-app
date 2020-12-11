/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import fireConf from './firebaseConf';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './router';



class App extends Component  {

  state = {
    loggedIn:null
  }

  componentDidMount(){
    // Your web app's Firebase configuration
    fireConf.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
