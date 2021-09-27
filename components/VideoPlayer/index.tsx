import React from 'react';
import {View, Text} from "react-native";
import {Video} from "expo-av";

interface VideoPlayerProps {
    videoURI: string,
    thumbnailURI: string,
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {videoURI, thumbnailURI} = props;

    return (
        <View>
            <Video
                source={{ uri: 'https://www.youtube.com/embed/cwhC19Fa_84' }}
                style={{width: '100%', aspectRatio: 16/9}}
                posterSource={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg',
                }}
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
