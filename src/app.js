/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
	// Setup Firebase initialization
	// Adding lifesycle method hook/handle automatically envoked
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyChfDueWis5PTHqXHMybwdvfQi3LkgqzUE',
			authDomain: 'auth-ba9d3.firebaseapp.com',
			databaseURL: 'https://auth-ba9d3.firebaseio.com',
			storageBucket: 'auth-ba9d3.appspot.com',
			messagingSenderId: '491144405866'
		});
  }

	render() {
		return (
			<View>
				<Header headerText="AUTHENTICATION" />
				<LoginForm />
			</View>
		);
	}
}

export default (App);
