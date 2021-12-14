import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput  } from 'react-native'

import Fire from '../Fire'

export default class RegisterScreen extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
        },
        errorMessage: null,
    }

    handleSignUp = () => {
        Fire.shared.createUser(this.state.user);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 20}}> Register </Text>
                <View>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={name => this.setState({user:{...this.state.user, name }})}
                            value={this.state.name}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={email => this.setState({user:{...this.state.user, email }})}
                            value={this.state.email}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({user:{...this.state.user, password }})}
                            value={this.state.password}
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity onPress={this.handleSignUp} style={styles.button}>
                    <Text style={{ color: "#FFF" }}>Sign up</Text>
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