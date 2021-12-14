import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import firebase from 'firebase'

export default class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 20}}> Login </Text>
                <View>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={{marginTop:5}}>
                    <Text style={{marginHorizontal: 10}}>Email</Text>
                    <TextInput style={styles.input}
                        placeholder='Email Address'
                        name='Email'
                        type='email'
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />
                </View>
                <View style={{marginTop:5}}>
                    <Text style={{marginHorizontal: 10}}>Password</Text>
                    <TextInput style={styles.input}
                        placeholder='Password'
                        name='password'
                        type='password'
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:'#FFF', fontSize:'bold'}}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{textAlign: 'center'}} >
                    <Text> Not have any account? <Text style={{color: '#FE0000', fontSize: 'bold'}} onPress={() => this.props.navigation.navigate('Register')}>Register</Text></Text>
                    
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    error:{
        color:'#FF3300'
    },
    input:{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginHorizontal: 10,
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