import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SuggestedWatch from "../components/SuggestedWatch";

const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
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
}


export default TabOneScreen;
