/*esling arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);
};

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	}
};

export { Spinner };
