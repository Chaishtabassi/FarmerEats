import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const Tablescreen = () => {
    const tableData = [
        { id: '1', name: 'John Doe', age: 28, city: 'New York' },
        { id: '2', name: 'Jane Smith', age: 34, city: 'Los Angeles' },
        { id: '3', name: 'Alice Johnson', age: 25, city: 'Chicago' },
        { id: '4', name: 'Bob Brown', age: 40, city: 'Houston' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.age}</Text>
            <Text style={styles.cell}>{item.city}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Name</Text>
                <Text style={styles.headerText}>Age</Text>
                <Text style={styles.headerText}>City</Text>
            </View>
            <FlatList
                data={tableData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#D5715B',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    headerText: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        padding: 5,
    },
});

export default Tablescreen;
