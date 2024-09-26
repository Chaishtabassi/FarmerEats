import AsyncStorage from '@react-native-async-storage/async-storage';

const base_url = "https://dairy-api.ptindia.org/api/";

export const isValidToken = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
            console.log('Token not found');
            return false;
        }
        console.log('Token found:', token);

        return true;
    } catch (error) {
        console.error('Token validation error:', error);
        return false;
    }
};

export const Login = async (email, password) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            email: email,
            password: password,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: body,
            redirect: "follow"
        };

        const response = await fetch(`${base_url}auth/login`, requestOptions);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Login Result:', result);

        if (result && result.token) {
            await AsyncStorage.setItem('authToken', result.token);
            console.log('Token saved successfully:', result.token);
        } else {
            throw new Error('Invalid token received from server');
        }

        return result;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};

export const DeliveryNotes = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token);

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${base_url}delivery-notes`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Delivery Notes Result:', result);

        return result;
    } catch (error) {
        console.error('Delivery Notes Error:', error);
        throw error;
    }
};

export const DeliveryNotesItems = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token);

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${base_url}delivery-notes-items`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Delivery Notes Result:', result);

        return result;
    } catch (error) {
        console.error('Delivery Notes Error:', error);
        throw error;
    }
};

export const DailyExpenseList = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token);

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${base_url}daily-expenses`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Delivery Notes Result:', result);

        return result;
    } catch (error) {
        console.error('Delivery Notes Error:', error);
        throw error;
    }
};

export const AddDailyExpense = async (date, paidTo, amount, notes, file) => {
    console.log(date, paidTo, amount, notes, file);
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token);

        const formData = new FormData();
        formData.append("paid_on", date); 
        formData.append("paid_to", paidTo);
        formData.append("amount", amount);
        formData.append("notes", notes);
        
        if (file) {
            formData.append("receipt", file); 
        }

        const response = await fetch(`${base_url}daily-expenses`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}. Response: ${error}`);
        }

        const result = await response.json();
        console.log('Add Daily Expense Result:', result);
        return result; 
    } catch (error) {
        console.error('Add Daily Expense Error:', error);
        throw error; 
    }
};


export const DailyCollectionList = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token);

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${base_url}daily-collections`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Delivery Notes Result:', result);

        return result;
    } catch (error) {
        console.error('Delivery Notes Error:', error);
        throw error;
    }
};

export const AddDailyCollection = async (date, receivedfrom, amount, notes, file) => {
    console.log(date, receivedfrom, amount, notes, file);
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token);

        const formData = new FormData();
        formData.append("received_on", date); 
        formData.append("received_from", receivedfrom);
        formData.append("amount", amount);
        formData.append("notes", notes);
        
        if (file) {
            formData.append("receipt", file); 
        }

        const response = await fetch(`${base_url}daily-collections`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}. Response: ${error}`);
        }

        const result = await response.json();
        console.log('Add Daily Expense Result:', result);
        return result; 
    } catch (error) {
        console.error('Add Daily Expense Error:', error);
        throw error; 
    }
};









