/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// #1 Import libs
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// #2 Create component - Functional
const Button = ({ anyPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={anyPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#2ff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};
// #3 Render

export { Button };
