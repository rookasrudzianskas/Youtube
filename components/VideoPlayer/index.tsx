import React from 'react';
import {View, Text} from "react-native";
import {Video} from "expo-av";

interface VideoPlayerProps {
    videoURI: string,
    thumbnailURI: string,
}

const VideoPlayer = (props: VideoPlayerProps) => {
    return (
        <View>
            <Video
                source={{ uri: 'http://foo/bar.mp3' }}
                style={{width: '100%', aspectRatio: 16/9}}
                posterSource={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg',
                }}
                posterStyle={{
                    resizeMode: 'cover',
                }}
                usePoster={true}
                useNativeControls
                resizeMode="contain"
            />
        </View>
    );
};

export default VideoPlayer;
