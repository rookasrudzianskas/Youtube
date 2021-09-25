import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "./Header";
import SuggestedWatch from "./SuggestedWatch";

const HomeScreen = () => {
    return (
        <View style={tw`flex`}>
            {/*  Header   */}
            <View style={tw``}>
                <Header />
                <SuggestedWatch />
            </View>

            <View style={tw``}>

            </View>
        </View>
    );
};

export default HomeScreen;
