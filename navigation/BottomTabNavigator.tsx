import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import TabOneScreen from '../screens/TabOneScreen';
import { BottomTabParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

    // @ts-ignore
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
            }}
            tabBarOptions={{ activeTintColor: '#274156', activeBackgroundColor: '#fbfcff', inactiveBackgroundColor: '#fbfcff' }}>
            <BottomTab.Screen
                name="Home"
                component={TabOneScreen}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
                }}

            />

        </BottomTab.Navigator>
    );
}
