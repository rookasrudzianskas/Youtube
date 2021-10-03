import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';


import TabOneScreen from "../screens/TabOneScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigator from "./BottomTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";
import VideoUploadScreen from "../screens/VideoUploadScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false,  }}>
    {/*// @ts-ignore*/}
            <Stack.Screen name="Root" component={BottomTabNavigator} />
    {/*// @ts-ignore*/}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
    {/*// @ts-ignore*/}
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
    {/*// @ts-ignore*/}
            <Stack.Screen name="VideoUpload" component={VideoUploadScreen} />
    {/*// @ts-ignore*/}
            <Stack.Screen name="WelcomeScreen" component={TabOneScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}
