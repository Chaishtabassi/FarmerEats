import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawercontent = props => {
    const navigation = useNavigation();

    const [Purchase, setPurchase] = useState(null);
    const [finance, setfinance] = useState(null);

    const togglePurchase = index => {
        setPurchase(Purchase === index ? null : index);
    };

    const togglefinance = index => {
        setfinance(finance === index ? null : index);
    };

    const renderLeadSubMenu = index => {
        if (Purchase === index) {
            return (
                <View style={styles.subMenu}>
                    <TouchableOpacity
                        style={styles.subMenuItem}
                        onPress={() => navigation.navigate('Delivery Notes')}>
                        <Ionicons
                            name="folder-outline"
                            size={20}
                            color="#666"
                            style={styles.icon}
                        />
                        <Text style={styles.subMenuText}>Delivery Notes</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return null;
    };

    const renderfinanceMenu = index => {
        if (finance === index) {
            return (
                <View style={styles.subMenu}>
                    <TouchableOpacity
                        style={styles.subMenuItem}
                        onPress={() => navigation.navigate('Daily Expense')}>
                        <FontAwesome
                            name="angle-right"
                            size={20}
                            color="#666"
                            style={styles.icon}
                        />
                        <Text style={styles.subMenuText}>Daily Expense</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.subMenuItem}
                        onPress={() => navigation.navigate('Daily Collection')}>
                        <FontAwesome
                            name="angle-right"
                            size={20}
                            color="#666"
                            style={styles.icon}
                        />
                        <Text style={styles.subMenuText}>Daily Collection</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return null;
    };

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('../Assets/logo.png')}
                />
            </View>

            <TouchableOpacity
                style={styles.drawerItemsingle}
                onPress={() => navigation.navigate('Dashboard')}>
                <Entypo name="home" size={20} color="#333" style={styles.icon} />
                <Text style={styles.label}>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => togglePurchase(3)}>
                <View style={styles.drawerItem1}>
                    <AntDesign
                        name="setting"
                        size={20}
                        color="#333"
                        style={styles.icon}
                    />
                    <Text style={styles.label}>Purchase</Text>
                </View>
                <Entypo
                    name={Purchase === 3 ? 'chevron-down' : 'chevron-left'}
                    size={20}
                    color="#333"
                />
            </TouchableOpacity>
            {renderLeadSubMenu(3)}

            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => togglefinance(4)}>
                <View style={styles.drawerItem1}>
                    <FontAwesome
                        name="money"
                        size={20}
                        color="#333"
                        style={styles.icon}
                    />
                    <Text style={styles.label}>Finance</Text>
                </View>
                <Entypo
                    name={finance === 3 ? 'chevron-down' : 'chevron-left'}
                    size={20}
                    color="#333"
                />
            </TouchableOpacity>
            {renderfinanceMenu(4)}

            <TouchableOpacity
                style={styles.drawerItemsingle}
                onPress={() => navigation.navigate('Reset')}>
                <AntDesign name="logout" size={20} color="#333" style={styles.icon} />
                <Text style={styles.label}>Change Password</Text>
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
        height: '100%',
        width: '100%',
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
    subMenuItem: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    subMenuText: {
        fontSize: 14,
        color: '#333',
    },
});

export default Drawercontent;
