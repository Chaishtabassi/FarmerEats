import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Drawercontent = props => {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('../Assets/Farmer.png')}
                />
            </View>

            <TouchableOpacity
                style={styles.drawerItemsingle}
                onPress={() => navigation.navigate('Dashboard')}>
                <Entypo name="home" size={20} color="#333" style={styles.icon} />
                <Text style={styles.label}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.drawerItemsingle}
                onPress={() => navigation.navigate('Table')}>
                <Entypo name="text-document" size={20} color="#333" style={styles.icon} />
                <Text style={styles.label}>Table</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: '50%',
        width: '80%',
        alignSelf: 'center',
    },
    drawerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    drawerItemsingle: {
        flexDirection: 'row',
        padding: 10,
    },
    drawerItem1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
    },
    subMenu: {
        marginTop: 10,
    },
});

export default Drawercontent;