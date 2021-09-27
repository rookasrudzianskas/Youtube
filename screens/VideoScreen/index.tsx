import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import video from '../../assets/data/video.json';

const VideoScreen = () => {

    let viewsString = video.views.toString();
    if (video.views > 1_000_000){
        viewsString = (video.views / 1_000_000).toFixed(1) + 'M'
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + 'K'
    }

    return (
        <View style={tw`mt-12`}>
            <View style={tw``}>
                <Image source={{uri: video?.thumbnail}} style={{width: '100%', aspectRatio: 16/9}} />
            </View>

            <View style={tw`flex flex-col px-3`}>
                <View style={tw`flex flex-row items-center mt-6`}>
                    <Text style={tw`text-blue-500`}>{video?.tags}</Text>
                </View>

                <View style={tw`mt-3`}>
                    <Text style={tw`text-lg text-gray-100`}>{video?.title}</Text>
                </View>

                <View style={tw`flex flex-row mt-3`}>
                    <Text style={tw`text-gray-300`}>{viewsString}</Text>
                    <Text style={tw`text-gray-300 ml-3`}>{video.createdAt}</Text>
                </View>
            </View>
        </View>
    );
};

export default VideoScreen;
