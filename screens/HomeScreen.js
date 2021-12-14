import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import firebase from 'firebase/app';

import Fire from '../Fire'
import { Button } from 'react-native-web';

export default class HomeScreen extends Component {
    state = {
        email: '',
        displayName: ''
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({email, displayName})
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Home </Text>
            <TouchableOpacity onPress={this.signOutUser} style={styles.button}>
                Logout
            </TouchableOpacity>

            <Button
                title='Logout'
                onPress={Fire.signOut} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    button:{
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    }
})