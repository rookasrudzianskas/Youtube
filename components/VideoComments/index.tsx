import React from 'react'
import { View, Text } from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';
import comments from '../../assets/data/comments.json';
import tw from "tailwind-react-native-classnames";

const VideoComments = () => {
    return (
        <View style={tw`bg-gray-800`}>
            <BottomSheetFlatList
                data={comments}
                renderItem={({item}) => <VideoComment comment={item} />}
            />
        </View>
    )
}

export default VideoComments;
