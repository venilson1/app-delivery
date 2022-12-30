import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import RecentScreen from '../../screens/RecentScreen';
import SearchScreen from '../../screens/SearchScreen';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Navigator 
                initialRouteName={"HomeScreen"}
                screenOptions={{
                    headerShown: false
                }}>
                <Screen name="Home" component={HomeScreen}/>
                <Screen name="Search" component={SearchScreen}/>
                <Screen name="Recent" component={RecentScreen}/>
                <Screen name="Profile" component={ProfileScreen}/>
            </Navigator>
        </NavigationContainer>

    )
};