import {
    StyleSheet,
    View,
    Text,
    Pressable,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { DailyExpenseList } from '../../Api/Api';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Dailyexpence = ({navigation}) => {
    const [ExpenseData, setExpenseData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDelivery();
    }, []);

    const getDelivery = async () => {
        try {
            const response = await DailyExpenseList();
            if (Array.isArray(response)) {
                const groupedExpenses = groupByWeekEnding(response);
                setExpenseData(groupedExpenses);
            } else {
                console.log("Unexpected response format:", response);
            }
            setLoading(false);
        } catch (error) {
            console.log('Error fetching delivery notes:', error);
            setLoading(false);
        }
    };

    const groupByWeekEnding = (data) => {
        // Function to calculate the week ending for each transaction
        return data.reduce((grouped, item) => {
            const weekEnding = getWeekEnding(new Date(item.paid_on));
            if (!grouped[weekEnding]) {
                grouped[weekEnding] = [];
            }
            grouped[weekEnding].push(item);
            return grouped;
        }, {});
    };

    const getWeekEnding = (paidOn) => {
        // Convert paid_on to a Date object
        const date = new Date(paidOn);
        
        // Add 1 day to correct the date (to fix off-by-one issue)
        date.setDate(date.getDate() + 1); 
        
        // Format the corrected date
        const formattedDate = date.toLocaleDateString('en-GB'); // Using en-GB to format as dd/mm/yyyy
    
        // Get the ISO week number for the corrected date
        const weekNumber = getISOWeekNumber(date);
        
        // Return the formatted week ending string
        return `${formattedDate} / Week Ending ${weekNumber}`;
    };
    
    // Function to get the ISO week number (helper function)
    const getISOWeekNumber = (date) => {
        const tempDate = new Date(date);
        tempDate.setUTCDate(tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
        return Math.ceil((((tempDate - yearStart) / 86400000) + 1) / 7);
    };
    
    const onPressPlusButton = () => {
        navigation.navigate('Add Expense');
    };

    const LeadItem = ({ item }) => (
        <View style={styles.leadContainer}>
            <Text style={styles.weekEnding}>{getWeekEnding(new Date(item.paid_on))}</Text>
            <View style={styles.transactionDetails}>
                <View>
                    <Text style={styles.label}>Paid To:</Text>
                    <Text style={styles.value}>{item.paid_to}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Amount:</Text>
                    <Text style={styles.value}>{item.amount}</Text>
                </View>
            </View>
            <View style={styles.transactionDetails}>
                <View>
                    <Text style={styles.label}>Created By:</Text>
                    <Text style={styles.value}>{item.created_by.name}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Paid On:</Text>
                    <Text style={styles.value}>{new Date(item.paid_on).toLocaleDateString()}</Text>
                </View>
            </View>
            <View style={styles.actions}>
                <Pressable style={styles.actionButton}>
                    <AntDesign name="edit" size={20} color="green" />
                </Pressable>
                <Pressable style={styles.actionButton}>
                    <AntDesign name="delete" size={20} color="red" />
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={'#D5715B'} style={styles.loader} />
            ) : (
                <FlatList
                    data={Object.values(ExpenseData).flat()} // Flattening the grouped expenses
                    renderItem={({ item }) => <LeadItem item={item} />}
                    keyExtractor={(item) => item._id}
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

export default Dailyexpence;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loader: {
        marginTop: 20,
    },
    leadContainer: {
        padding: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
    },
    weekEnding: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    transactionDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        color: '#555',
    },
    value: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    actionButton: {
        marginHorizontal: 5,
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
