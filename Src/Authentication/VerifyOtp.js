import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const VerifyOtp = ({ navigation }) => {

    const navigatereset = () => {
        navigation.navigate('Reset')
    }

    const Loginpress = () => {
        navigation.navigate('Login')
    }

    const [otp, setOtp] = useState(["", "", "", "", ""]);

    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>FarmerEats</Text>

            <Text style={styles.welcomeText}>Verify OTP</Text>

            <View style={styles.subtextContainer}>
                <Text style={styles.subtext}>Remember your pasword? </Text>
                <TouchableOpacity onPress={Loginpress}>
                    <Text style={styles.createAccountText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{ top: 40 }}>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={el => inputRefs.current[index] = el}
                            style={styles.input}
                            maxLength={1}
                            keyboardType="numeric"
                            value={digit}
                            onChangeText={value => handleChange(value, index)}
                            onKeyPress={e => handleKeyPress(e, index)}
                            autoFocus={index === 0}
                        />
                    ))}
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={navigatereset}>
                    <Text style={styles.loginButtonText}>Submit</Text>
                </TouchableOpacity>
                <Text style={styles.resend}>Resend Code</Text>
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
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#F5F5F5',
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
    resend: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: '500'
    },
});

export default VerifyOtp;
