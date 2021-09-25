import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";

const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-4xl`}>Youtube 🚀️</Text>
    </View>
  );
}


export default TabOneScreen;
