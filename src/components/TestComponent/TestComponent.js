// React stuff
import React from 'react';

// Redux stuff
import { connect } from 'react-redux'

// Actions
import { setMessage } from '../../actions/message'

// React components
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TestComponent extends React.Component {
    constructor(props) {
        super(props)

        this.changeText = this.changeText.bind(this)
    }

    changeText() {
        this.props.dispatch( setMessage('So sweet!') )
    }

	render() {
        console.log( this.props )
		return (
			<View>
				<Text style={styles.heart} onPress={this.changeText}>❤️</Text>
				<Text style={styles.message}>{this.props.message}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    heart: {
        fontSize: 80,
        textAlign: 'center'
    },
    message: {
        fontSize: 20,
        textAlign: 'center'
    }
});

function mapStateToProps(state) {
    return {
        message: state.message.message
    }
}

export default connect(mapStateToProps)(TestComponent)