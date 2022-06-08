import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen';
import GestionScreen from '../Screens/GestionScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Compte">
                <Stack.Screen name="Accueil" component={HomeScreen} />
                <Stack.Screen name="Gestion" component={GestionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;