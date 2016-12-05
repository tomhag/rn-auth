/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// Functional Component for styling, CSS style

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		// Added ref to props.children in the JSX
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 2,
		borderRadius: 8,
		borderColor: '#aaa',
		borderBottomWidth: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}

};

export { Card };
