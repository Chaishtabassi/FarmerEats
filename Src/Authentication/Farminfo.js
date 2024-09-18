import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Farminfo = ({ navigation }) => {

    const Verification = () => {
        navigation.navigate('Verification')
    }

    const Backbutton = () => {
        navigation.goBack(); 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>FarmerEats</Text>

            <Text style={styles.steps}>Signup 2 of 4</Text>
            <Text style={styles.welcomeText}>Farm Info</Text>

            <View style={styles.mainContent}>
                <View style={styles.inputContainer}>
                    <Icon name="tag" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Business Name"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="smile-o" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Informal Name"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="home" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Street Address"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="map-marker" size={15} color="#000000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>

                <View style={styles.city}>
                    <View style={[styles.inputContainer, { flex: 1, marginRight: 10 }]}>
                        <Icon name="map-marker" size={15} color="#000000" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="State"
                            placeholderTextColor="#A9A9A9"
                        />
                    </View>
                    <View style={[styles.inputContainer, { flex: 1 }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Zipcode"
                            placeholderTextColor="#A9A9A9"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={Backbutton}>
                    <Icon name="long-arrow-left" size={45} color="#000000" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={Verification}>
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
    mainContent: {
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
    city: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default Farminfo;
