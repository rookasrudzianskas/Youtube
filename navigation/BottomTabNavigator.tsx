import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import TabOneScreen from '../screens/TabOneScreen';
import { BottomTabParamList } from '../types';
import TabTwoScreen from "../screens/TabTwoScreen";
import HomeScreen from '../screens/HomeScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

    // @ts-ignore
    // @ts-ignore
    return (
        <BottomTab.Navigator
    // @ts-ignore
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false,
                // activeTintColor: '#274156', activeBackgroundColor: '#fbfcff', inactiveBackgroundColor: '#fbfcff'
            }}
    //         tabBarOptions={{  }}
        >
            <BottomTab.Screen
    // @ts-ignore
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
                }}

            />

            <BottomTab.Screen
                name="Home"
                component={TabOneScreen}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
                }}

            />

            <BottomTab.Screen
    // @ts-ignore
                name="Second"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
                }}

            />

        </BottomTab.Navigator>
    );
}
