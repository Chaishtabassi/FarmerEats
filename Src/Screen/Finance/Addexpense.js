import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView, Modal, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { AddDailyExpense } from '../../Api/Api';
import Toast from 'react-native-toast-message';

const AddExpense = ({navigation}) => {
    const [date, setDate] = useState(new Date()); 
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [weekEnding, setWeekEnding] = useState('');
    const [paidTo, setPaidTo] = useState('');
    const [amount, setAmount] = useState('');
    const [notes, setNotes] = useState('');
    const [file, setFile] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        
        if (currentDate instanceof Date) {
            setDate(currentDate);
            setWeekEnding(calculateWeekEnding(currentDate));
        }
    };

    const calculateWeekEnding = (date) => {
        const day = date.getDay();
        const lastDayOfWeek = new Date(date);
        lastDayOfWeek.setDate(date.getDate() + (6 - day));
        return lastDayOfWeek.toLocaleDateString('en-GB');
    };

    const handleAddExpense = async () => {
        if (!date || !paidTo || !amount || !notes || !file) {
            Alert.alert('Input Required', 'Please fill in all the fields and select a receipt before submitting.');
            return; 
        }
    
        try {
            const formattedDate = date.toISOString().split('T')[0];
    
            const response = await AddDailyExpense(formattedDate, paidTo, amount, notes, file);
            console.log('Add Expense Response:', response);
    
            if (typeof response === 'object' && response !== null) {
                Toast.show({
                    text1: 'Expense added successfully!',
                    type: 'success',
                });
                navigation.replace('Daily Expense'); 
            } else {
                Toast.show({
                    text1: 'Failed to add expense. Please try again.',
                    type: 'error',
                });
            }
        } catch (error) {
            console.error('Error adding expense:', error);
            Toast.show({
                text1: 'An error occurred. Please try again later.',
                type: 'error',
            });
        }
    };
    

    const chooseFile = () => {
        setModalVisible(true);
    };

    const handleFileSelection = (source) => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        if (source === 'camera') {
            launchCamera(options, (response) => {
                handleResponse(response);
            });
        } else if (source === 'gallery') {
            launchImageLibrary(options, (response) => {
                handleResponse(response);
            });
        }

        setModalVisible(false);
    };
    const handleResponse = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.error('ImagePicker Error: ', response.error);
        } else {
            const selectedFile = response.assets[0];
    
            const filePathResponse = {
                originalPath: selectedFile.originalPath
            };
    
            console.log('Original Path:', filePathResponse.originalPath);
    
            setFile(filePathResponse.originalPath);
        }
    };
    
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Date</Text>
                <Pressable onPress={() => setShowDatePicker(true)}>
                    <TextInput
                        style={styles.input}
                        value={date.toLocaleDateString('en-GB')}
                        editable={false}
                    />
                </Pressable>
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    />
                )}
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Week Ending</Text>
                <TextInput
                    style={styles.input}
                    value={weekEnding}
                    editable={false}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Paid To</Text>
                <TextInput
                    style={styles.input}
                    value={paidTo}
                    onChangeText={setPaidTo}
                    placeholder="Enter the payee name"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="Enter the amount"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Receipt</Text>
                <Pressable style={styles.fileInput} onPress={chooseFile}>
                    {file && <Text style={styles.fileInfo}>{file}</Text>}
                </Pressable>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Notes</Text>
                <TextInput
                    style={styles.textArea}
                    value={notes}
                    onChangeText={setNotes}
                    placeholder="Add any notes"
                    multiline={true}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Image Source</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => handleFileSelection('camera')}>
                            <Text style={styles.modalButtonText}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => handleFileSelection('gallery')}>
                            <Text style={styles.modalButtonText}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={styles.loginButton} onPress={handleAddExpense} >
                <Text style={styles.loginButtonText}>Add New</Text>
            </TouchableOpacity>

            <View style={{ height: 100 }}></View>
        </ScrollView>
    );
};

export default AddExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    fileInput: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    textArea: {
        height: 80,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        textAlignVertical: 'top',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#D5715B',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
