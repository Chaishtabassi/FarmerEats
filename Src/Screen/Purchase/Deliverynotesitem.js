import React, { useEffect, useState } from 'react';
import { DeliveryNotesItems } from '../../Api/Api';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, Linking, FlatList, ScrollView, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Deliverynotesitem = () => {
    const [Itemdata, setItemData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Please Select');

    useEffect(() => {
        getDeliveryitem();
    }, []);

    const getDeliveryitem = async () => {
        try {
            const response = await DeliveryNotesItems();
            console.log('Full API response:', response);

            if (Array.isArray(response)) {
                setItemData(response);
            } else {
                console.log('Unexpected response format:', response);
            }

        } catch (error) {
            console.log('Error fetching delivery notes:', error);
        }
    };

    const onClose = () => {
        setIsModalVisible(false);
    };

    const orderItems = [
        {
            description: 'Why Bharat Matters',
            details: 'awesome',
            quantity: 2,
            receivedQuantity: 2,
            amount: '£600',
            total: '£1200',
        },
        {
            description: 'dosa',
            details: 'awesome',
            quantity: 10,
            receivedQuantity: 10,
            amount: '£40',
            total: '£400',
        },
        {
            description: 'Why Bharat Matters',
            details: 'awesome',
            quantity: 5,
            receivedQuantity: 5,
            amount: '£600',
            total: '£3000',
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.details}>{item.details}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Quantity: </Text>
                    <Text style={styles.value}>{item.quantity}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Received Quantity: </Text>
                    <Text style={styles.value}>{item.receivedQuantity}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Amount: </Text>
                    <Text style={styles.value}>{item.amount}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Total: </Text>
                    <Text style={styles.value}>{item.total}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.actionButton} onPress={() => setIsModalVisible(true)}>
                <FontAwesome name="thumbs-up" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/* Top Section */}
            <View style={styles.section}>
                {/* Dhillon Dairy Information */}
                <View style={styles.infoSection}>
                    <Text style={styles.titleText}>Dhillon Dairy</Text>
                    <Text style={styles.text}>1065 Mandan Road, London, UK</Text>
                    <Text style={styles.text}>(123)-65202</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('mailto:info@dhillondairy.co.uk')}>
                        info@dhillondairy.co.uk
                    </Text>
                    <Text style={styles.text}>+44 919-91-91-919</Text>
                </View>

                {/* Route Information */}
                <View style={styles.infoSection}>
                    <Text style={styles.titleText}>Route Information :</Text>
                    <Text style={styles.text}>Route Name : Route 10</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('#')}>Driver : John M</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('#')}>Verifier : Sachin Jaiswal</Text>
                </View>
            </View>

            {/* Middle Section */}
            <View style={styles.section}>
                {/* Client Information */}
                <View style={styles.infoSection}>
                    <Text style={styles.titleText}>Client Information :</Text>
                    <Text style={styles.text}>Suplier2</Text>
                    <Text style={styles.text}>HN 101, Main Street, New LC</Text>
                    <Text style={styles.text}>London, London (120 AHB)</Text>
                    <Text style={styles.text}>93995436587</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('mailto:sup2@mailinator.com')}>
                        sup2@mailinator.com
                    </Text>
                </View>

                {/* Order Information */}
                <View style={styles.infoSection}>
                    <Text style={styles.titleText}>Order Information :</Text>
                    <Text style={styles.text}>Date : 6/10/2024</Text>
                    <Text style={styles.text}>Status : </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Confirm</Text>
                    </View>
                </View>

                {/* Invoice Info */}
                <View style={styles.infoSection}>
                    <Text style={styles.titleText}>Invoice Number #1234</Text>
                    <Text style={styles.dueText}>TOTAL DUE : £4600</Text>
                </View>
            </View>

            <FlatList
                data={orderItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginBottom: 20 }}
            />

            {/* Subtotal and Total Section */}
            <View style={styles.totalSection}>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Sub Total</Text>
                    <Text style={styles.totalValue}>£4600</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>£4600</Text>
                </View>
            </View>

            {/* Order Notes */}
            <View style={styles.orderNotes}>
                <Text style={styles.notesLabel}>Order Notes :</Text>
                <Text style={styles.notesValue}>10</Text>
            </View>
            <View style={{ height: 100 }}></View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}  // This handles the Android back button
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.modalText}>Confirm Delivery Items</Text>
                        <FontAwesome name="close" size={24} color="white" />    
                        </View>
                        <Picker
                            selectedValue={selectedItem}
                            style={{ height: 50,width:'100%',borderWidth:1}}
                            onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
                        >
                            <Picker.Item label="Please Select" value="Please Select" />
                            <Picker.Item label="All" value="All" />
                            <Picker.Item label="Partial" value="Partial" />
                            <Picker.Item label="None" value="None" />
                        </Picker>
                        <TouchableOpacity
                            style={styles.confirmbutton}
                            onPress={onClose}
                        >
                            <Text style={styles.textStyle}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
};

export default Deliverynotesitem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    infoSection: {
        flex: 1,
        marginRight: 10,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
        color: '#000',
    },
    link: {
        fontSize: 14,
        color: '#0000FF',
        marginBottom: 5,
    },
    statusContainer: {
        backgroundColor: '#2ECC71',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    statusText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    dueText: {
        color: '#0000FF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    cardContent: {
        flex: 1,
    },
    descriptionContainer: {
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    details: {
        fontSize: 14,
        color: '#777',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    value: {
        fontSize: 14,
        color: '#000',
    },
    actionButton: {
        backgroundColor: '#2ECC71',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50
    },
    confirmbutton: {
        backgroundColor: '#D5715B',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50
    },
    totalSection: {
        marginTop: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0000FF',
    },
    orderNotes: {
        marginTop: 20,
    },
    notesLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    notesValue: {
        fontSize: 14,
        color: '#555',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        height: '30%',
        width: '80%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    modalText:{
        fontSize:16,
        fontWeight:'500'
    }
});
