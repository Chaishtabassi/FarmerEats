import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

const VerificationProof = ({ navigation }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFilePicker = async () => {
        try {
            const results = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
                allowMultiSelection: true,
            });

            setSelectedFiles(results);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('File picker canceled');
            } else {
                console.error('Unknown error: ', err);
            }
        }
    };

    const removeFile = (fileToRemove) => {
        setSelectedFiles(selectedFiles.filter(file => file.uri !== fileToRemove.uri));
    };

    const Verification = () => {
        navigation.navigate('Business');
    };

    const Backbutton = () => {
        navigation.goBack();
    };

    const renderFileItem = ({ item }) => (
        <View style={styles.fileItem}>
            <Text style={styles.fileName}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeFile(item)}>
                <Icon name="close" size={15} color="#261C12" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>FarmerEats</Text>
            <Text style={styles.steps}>Signup 3 of 4</Text>
            <Text style={styles.welcomeText}>Verification</Text>
            <Text style={styles.subtext}>
                Attach proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic
            </Text>

            <View style={styles.row}>
                <Text style={styles.text}>Attach proof of registration</Text>
                <TouchableOpacity style={styles.icon} onPress={handleFilePicker}>
                    <Icon name="camera-retro" size={23} color="white" />
                </TouchableOpacity>
            </View>

            {selectedFiles.length > 0 && (
                <FlatList
                    data={selectedFiles}
                    renderItem={renderFileItem}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.fileList}
                />
            )}

            <View style={styles.bottom}>
                <TouchableOpacity onPress={Backbutton}>
                    <Icon name="long-arrow-left" size={45} color="#000000" />
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
        fontWeight: '500',
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
    subtext: {
        fontSize: 14,
        fontWeight: '400',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        alignItems: 'center',
    },
    icon: {
        height: 43,
        width: 43,
        backgroundColor: '#D5715B',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '60%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    fileItem: {
        paddingVertical: 15,
        backgroundColor: '#eeedec',
        paddingHorizontal: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    fileName: {
        fontSize: 14,
        color: '#000',
    },
    fileList: {
        marginTop: 20,
    },
});

export default VerificationProof;
