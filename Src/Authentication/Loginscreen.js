import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Login_Api from '../API/Authapi'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const Loginscreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await Login_Api(email, password);
  
      if (result.message == 'Login successful.') {
        Alert.alert('Login successful', result.message);
      } else {
        Alert.alert('Login failed', result.message);
      }
    } catch (error) {
      Alert.alert('Login Error', 'An error occurred while logging in. Please try again.');
      console.error('Login Error:', error);
    }
  };

  const Navigateforgot = () => {
    navigation.navigate('Forgot');
  };

  const Signup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>FarmerEats</Text>

      <Text style={styles.welcomeText}>Welcome back!</Text>

      <View style={styles.subtextContainer}>
        <Text style={styles.subtext}>New here? </Text>
        <TouchableOpacity onPress={Signup}>
          <Text style={styles.createAccountText}>Create account</Text>
        </TouchableOpacity>
      </View>

      <View style={{ top: 40 }}>
        <View style={styles.inputContainer}>
          <Icon name="at" size={15} color="#000000" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={15} color="#000000" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
          />
          <TouchableOpacity onPress={Navigateforgot}>
            <Text style={styles.forgotText}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or login with</Text>

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
  forgotText: {
    color: '#D5715B',
    fontWeight: '400',
    fontSize: 14,
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
  orText: {
    fontSize: 10,
    color: '#A9A9A9',
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: '500',
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
    paddingVertical: 5,
  },
});

export default Loginscreen;
