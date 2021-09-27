import React from 'react';
import {View, Text} from "react-native";
import {Video} from "expo-av";

const VideoPlayer = () => {
    return (
        <View>
            <Video
                source={{ uri: 'http://foo/bar.mp3' }}
                style={{width: '100%', aspectRatio: 16/9}}
                // posterSource={{
                //     uri: thumbnailURI,
                // }}
                posterStyle={{
                    resizeMode: 'cover',
                }}
                usePoster={false}
                useNativeControls
                resizeMode="contain"
            />
        </View>
    );
};

export default VideoPlayer;
