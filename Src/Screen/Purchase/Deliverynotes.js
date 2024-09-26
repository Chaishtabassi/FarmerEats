import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { DeliveryNotes } from '../../Api/Api';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Deliverynotes = ({ navigation }) => {
    const [leadData, setLeadData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDelivery();
    }, []);

    const getDelivery = async () => {
        try {
            const response = await DeliveryNotes();
            console.log('Full API response:', response);

            if (Array.isArray(response)) {
                setLeadData(response);
            } else {
                console.log("Unexpected response format:", response);
            }

            setLoading(false);
        } catch (error) {
            console.log('Error fetching delivery notes:', error);
            setLoading(false);
        }
    };

    const onPressPlusButton = () => {
        // navigation.navigate('Add Lead');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const Deliverynotesnavigate = ()=>{
        navigation.navigate('Delivery Notes Items')
    }

    const LeadItem = ({ item, index }) => {
        return (
            <Pressable>
                <View style={styles.leadContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Pressable style={styles.editButton1}>
                            <Text style={styles.editButtonText1}>{item.status}</Text>
                        </Pressable>
                        <Text style={styles.leadInfo1}>Order_Date: {formatDate(item.order_date)} </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View style={styles.profileContainer}></View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <Text style={styles.leadInfo1}>Supplier: {item.supplier.name}</Text>
                                    <Pressable onPress={Deliverynotesnavigate}>
                                    <Text style={[styles.leadInfo1, { textDecorationLine: 'underline', color: 'blue' }]}>
                                        Invoice Number: {item.invoice_number}
                                    </Text>
                                    </Pressable>
                                </View>
    
                                <Text style={styles.leadInfo1}>Total Amount: {item.total}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <View></View>
                                    <Text style={styles.orderDate}>Week Total: {item.total}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    };

    return (
        <View style={styles.body}>
            {loading ? (
                <ActivityIndicator size="large" color={'#D5715B'} style={styles.loader} />
            ) : (
                <FlatList
                    data={leadData}
                    renderItem={LeadItem}
                    keyExtractor={item => item.lead_id ? item.lead_id.toString() : Math.random().toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
                    ListFooterComponent={<View style={{ height: 100 }} />}
                />
            )}
            <View style={styles.plusButtonContainer}>
                <Pressable style={styles.plusButton} onPress={onPressPlusButton}>
                    <AntDesign name="plus" size={28} color="#dbdad3" />
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        height: 40,
        backgroundColor: '#E7E6E1',
    },
    leadContainer: {
        padding: 10,
        borderRadius: 6,
        borderColor: '#ede8e8',
        borderWidth: 1,
        backgroundColor: '#ede8e8',
        marginBottom: 10,
    },
    editButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#625bc5',
        padding: 5,
        borderRadius: 4,
    },
    editButton1: {
        alignSelf: 'flex-start',
        backgroundColor: '#625bc5',
        padding: 5,
        borderRadius: 4,
    },
    editButtonText1: {
        color: '#fff',
    },
    body: {
        flex: 1,
        margin: 10,
        backgroundColor:'#fff'
    },
    button: {
        borderWidth: 1,
        borderColor: '#D5715B',
        width: '30%',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#e6ebf5',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 16,
    },
    loader: {
        marginTop: 20,
    },
    commentsContainer: {
        height: '30%',
        padding: 10,
    },
    orderDate: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    plusButtonContainer: {
        position: 'absolute',
        backgroundColor: '#625bc5',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        alignSelf: 'flex-end',
        bottom: 20,
        right: 20,
    },
    plusButton: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Deliverynotes;
