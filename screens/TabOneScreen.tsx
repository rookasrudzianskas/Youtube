import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";

const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View style={tw`flex`}>
      {/*  Header   */}
        <Header />
        <View style={tw` flex-1 items-center justify-center`}>
            <Text style={tw`font-bold text-4xl`}>Youtube 🚀️</Text>
        </View>
    </View>
  );
}


export default TabOneScreen;
