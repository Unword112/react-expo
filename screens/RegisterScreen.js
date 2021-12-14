import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput  } from 'react-native'

import firebase from 'firebase'

export default class RegisterScreen extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        errorMessage: null,
    }

    handleSummit = () => {
        const { name, email, password, confirm_password } = this.state;

        firebase
        .auth()
        .createUserWithEmailAndPassword(name, email, password)
        .then(userCredentials => {
            /*if(this.state.password != this.state.confirm_password){
                this.setState({ errorMessage: error.message })
            } else {
                
            }*/
            userCredential => this.firestore.collection('users')
            .doc(userCredential.user.uid).set({name})
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 20}}> Register </Text>
                <View>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={{marginTop:5}}>
                    <Text style={{marginHorizontal: 10}}>Name</Text>
                    <TextInput style={styles.input}
                        placeholder='name'
                        name='name'
                        type='name'
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                    />
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
                        secureTextEntry
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View style={{marginTop:5}}>
                    <Text style={{marginHorizontal: 10}}>Confirm Password</Text>
                    <TextInput style={styles.input}
                        placeholder='confirm-password'
                        name='confirm-password'
                        type='confirm-password'
                        secureTextEntry
                        onChangeText={confirm_password => this.setState({confirm_password})}
                        value={this.state.confirm_password}
                    />
                </View>s
                <TouchableOpacity style={styles.button} onPress={this.handleSummit}>
                    <Text style={{color:'#FFF', fontSize:'bold'}}>Sign Up</Text>
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