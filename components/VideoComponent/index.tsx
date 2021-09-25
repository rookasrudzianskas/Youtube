import React from 'react';
import {View, Image, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const VideoComponent = () => {
    return (
        <View style={tw``}>
            <View style={tw``}>
                <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.jpeg'}} style={{ width: 250, height: 250 }} />
            </View>
        </View>
    );
};

export default VideoComponent;
