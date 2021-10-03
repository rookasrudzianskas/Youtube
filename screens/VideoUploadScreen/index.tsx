import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const VideoUploadScreen = () => {
    return (
        <View style={tw``}>
            <View style={tw`mt-10 flex items-center`}>
                <Text style={tw`text-white text-lg`}>Upload Video</Text>
            </View>
        </View>
    );
};

export default VideoUploadScreen;

