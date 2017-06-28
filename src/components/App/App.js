import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import TestComponent from '../TestComponent/TestComponent'

class App extends React.Component {
   
	render() {
		return (
			<View style={styles.container}>
				<TestComponent />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App