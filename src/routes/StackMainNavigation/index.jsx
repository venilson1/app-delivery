import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'


const { Navigator, Screen } = createBottomTabNavigator();

export default () => (

    <Navigator>
        <Screen name="Home" component={HomeScreen}/>
        <Screen name="Search" component={SearchScreen}/>
        <Screen name="Recent" component={RecentScreen}/>
        <Screen name="Profile" component={ProfileScreen}/>
    </Navigator>

)


