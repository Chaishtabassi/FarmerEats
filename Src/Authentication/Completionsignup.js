import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Completionsignup = ({navigation}) => {

    const Complete = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../Assets/Done.png')} />
                <Text style={styles.heading}>You’re all done!</Text>
                <Text style={styles.text}>
                    Hang tight! We are currently reviewing your account and will follow up with you in 2-3 business days.
                    In the meantime, you can setup your inventory.
                </Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.loginButton} onPress={Complete}>
                    <Text style={styles.loginButtonText}>Got it!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Completionsignup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: '700',
        color: '#261C12',
        marginTop: 20,
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#898989',
        marginTop: 10,
        textAlign: 'center',
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
    loginButton: {
        backgroundColor: '#D5715B',
        borderRadius: 30,
        paddingVertical: 11,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
})
