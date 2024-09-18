import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Forgotscreen = ({navigation}) => {

    const navigateOtp =()=>{
        navigation.navigate('VerifyOtp')
    }

    const Loginpress =()=>{
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>FarmerEats</Text>

            <Text style={styles.welcomeText}>Forgot Password?</Text>

            <View style={styles.subtextContainer}>
                <Text style={styles.subtext}>Remember your pasword? </Text>
                <TouchableOpacity onPress={Loginpress}>
                    <Text style={styles.createAccountText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{ top: 40 }}>

                <View style={styles.inputContainer}>
                    <Icon name="phone" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={navigateOtp}>
                    <Text style={styles.loginButtonText}>Send Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingVertical: 40,
    },
    appTitle: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 40,
        textAlign: 'left',
        color: '#000000',
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtextContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    subtext: {
        fontSize: 14,
        color: '#A9A9A9',
        fontWeight: '500',
    },
    createAccountText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#D5715B',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#D5715B',
        borderRadius: 30,
        paddingVertical: 11,
        alignItems: 'center',
        marginVertical: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
});

export default Forgotscreen;
