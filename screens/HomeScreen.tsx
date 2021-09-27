import React from 'react';
import {View, Text, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SuggestedWatch from "../components/SuggestedWatch";
// import VideoListItem from "../components/VideoListItem";
import videos from '../assets/data/videos.json';

const HomeScreen = () => {
    return (
        <View style={tw`flex`}>
            {/*  Header   */}
            <View style={tw``}>
                <Header />
                <SuggestedWatch />
            </View>

            {/*<View style={tw``}>*/}
            {/*    <FlatList  data={videos} renderItem={({item}) => (*/}
            {/*        <VideoListItem key={item.id} item={item} />*/}
            {/*    )}/>*/}
            {/*</View>*/}
        </View>
    );
};

export default HomeScreen;
