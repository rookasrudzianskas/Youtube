import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import video from '../../assets/data/video.json';

const VideoScreen = () => {
    return (
        <View style={tw`mt-12`}>
            <View style={tw``}>
                <Image source={{uri: video?.thumbnail}} style={{width: '100%', aspectRatio: 16/9}} />
            </View>
        </View>
    );
};

export default VideoScreen;
