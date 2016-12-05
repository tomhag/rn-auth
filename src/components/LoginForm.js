/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// Class-based function

import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="user@mail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection />

				<CardSection>
					<Button>Press
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
