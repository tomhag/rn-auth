/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {

	// By default the user is not logged in.
	state = { loggedIn: null };

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

	// User logged in or not?
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });	
			} else {
				this.setState({ loggedIn: false });
			}
		});
  }
 
	// renderContent() {
	// 	if (this.state.loggedIn) {
	// 		return (
	// 			<View style={{ flexDirection: 'row' }}>
	// 				<Button>
	// 				Log out
	// 				</Button>
	// 			</View>
	// 		);
	// 	}
	// 	return <LoginForm />;
	// }

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={{ flexDirection: 'row' }}>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</View>
					);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={{ top: 200 }}>
							<Spinner size='large' />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="AUTHENTICATION" />
				{this.renderContent()}
			</View>
		);
	}
}

export default (App);
