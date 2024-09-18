import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpscreen = ({ navigation }) => {

    const Farminfo = () => {
        navigation.navigate('Farminfo')
    }

    const loginbutton = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>FarmerEats</Text>

            <Text style={styles.steps}>Signup 1 of 4</Text>
            <Text style={styles.welcomeText}>Welcome!</Text>

            <View style={styles.socialLoginContainer}>
                <TouchableOpacity style={styles.socialimage}>
                    <Image
                        source={require('../Assets/google.png')}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialimage}>
                    <Image
                        source={require('../Assets/apple.png')}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialimage}>
                    <Image
                        source={require('../Assets/facebook.png')}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.orText}>or signup with</Text>

            <View style={styles.mainContent}>
                <View style={styles.inputContainer}>
                    <Icon name="user-o" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="at" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="phone" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Re-enter Password"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={loginbutton}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={Farminfo}>
                    <Text style={styles.loginButtonText}>Continue</Text>
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
    steps: {
        fontSize: 14,
        fontWeight: '500'
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
    orText: {
        fontSize: 10,
        color: '#A9A9A9',
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: '500'
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    socialIcon: {
        width: 30,
        height: 30,
    },
    socialimage: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#5555',
        width: '20%',
        alignItems: 'center',
        paddingVertical: 5
    },
    mainContent: {
        // flex: 1,  
        justifyContent: 'center',
        marginTop: 30,
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
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 30,
        right: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
    },
    loginButton: {
        backgroundColor: '#D5715B',
        borderRadius: 30,
        paddingVertical: 11,
        width:'60%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
});

export default SignUpscreen;
