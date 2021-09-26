import React from 'react';
import {View, Image, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const VideoComponent = () => {
    return (
        <View style={tw``}>
            <View style={tw``}>
                <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.jpeg'}} style={{ width: '100%', aspectRatio: 16/9 }} />
                <View style={tw`bg-black opacity-75 rounded-md h-5 w-12 flex items-center justify-center`}>
                    <Text style={tw`text-white`}>14:53</Text>
                </View>
            </View>
        </View>
    );
};

export default VideoComponent;

