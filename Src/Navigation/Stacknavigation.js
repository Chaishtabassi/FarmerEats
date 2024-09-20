import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import Homescreen from '../Screen/Homescreen';
import Servicesscreen from '../Screen/Servicesscreen';
import Cartscreen from '../Screen/Cartscreen';
import Profilescreen from '../Screen/Profilescreen';
import Loginscreen from '../Authentication/Loginscreen';
import Splashscreen from '../Authentication/Splashscreen';
import Crousalscreen from '../Authentication/Crousalscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawercontent from '../Navigation/Drawercontent'
import Tablescreen from '../Screen/Tablescreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
    const commonHeaderLeft = () => (
        <Ionicons
            name="menu"
            size={30}
            color="#fff"
            style={{ marginLeft: 10, top: 2 }}
            onPress={() => navigation.openDrawer()}
        />
    );

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Services':
                            iconName = 'shopping-bag';
                            break;
                        case 'Cart':
                            iconName = 'shopping-cart';
                            break;
                        case 'Profile':
                            iconName = 'user-o';
                            break;
                        default:
                            iconName = 'question';
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#D5715B',
                tabBarInactiveTintColor: '#gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={Homescreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Dashboard',
                    headerStyle: { backgroundColor: '#D5715B' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerLeft: commonHeaderLeft,
                }}
            />
            <Tab.Screen
                name="Services"
                component={Servicesscreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#D5715B' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerLeft: commonHeaderLeft,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cartscreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#D5715B' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerLeft: commonHeaderLeft,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profilescreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#D5715B' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerLeft: commonHeaderLeft,
                }}
            />
        </Tab.Navigator>
    );
};

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={() => <Drawercontent />}>
            <Drawer.Screen
                name="Dashboard"
                component={BottomTabNavigation}
                options={{
                    headerShown: false,
                    headerStyle: { backgroundColor: '#D5715B' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            />
        </Drawer.Navigator>
    );
};

const Stacknavigation = () => {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Splash"
                        component={Splashscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Crousal"
                        component={Crousalscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Loginscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AppDrawer"
                        component={DrawerNavigation}
                        options={{ headerShown: false }}
                    />
                     <Stack.Screen
                        name="Table"
                        component={Tablescreen}
                        options={{
                            headerShown: true,
                            headerStyle: { backgroundColor: '#D5715B' },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontWeight: 'bold' },
                        }}
                    />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
};

export default Stacknavigation;
