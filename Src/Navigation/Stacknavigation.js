import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splashscreen from '../Authentication/Splashscreen'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../Authentication/Loginscreen';
import Forgotscreen from '../Authentication/Forgotscreen';
import VerifyOtp from '../Authentication/VerifyOtp';
import ResetPassword from '../Authentication/ResetPassword';
import SIgnUpscreen from '../Authentication/SIgnUpscreen';
import Farminfo from '../Authentication/Farminfo';
import VerificationProof from '../Authentication/VerificationProof';
import BusinessHours from '../Authentication/BusinessHours';
import Completionsignup from '../Authentication/Completionsignup';

const Stacknavigation = () => {

    const Stack = createNativeStackNavigator();

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
                        name="Login"
                        component={Loginscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Forgot"
                        component={Forgotscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="VerifyOtp"
                        component={VerifyOtp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Reset"
                        component={ResetPassword}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SIgnUpscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Farminfo"
                        component={Farminfo}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Verification"
                        component={VerificationProof}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Business"
                        component={BusinessHours}
                        options={{ headerShown: false }}
                    />
                     <Stack.Screen
                        name="Complete"
                        component={Completionsignup}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    )
}

export default Stacknavigation

const styles = StyleSheet.create({})