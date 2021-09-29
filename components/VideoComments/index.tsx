import React from 'react'
import {View, Text, FlatList, TextInput} from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';
import tw from "tailwind-react-native-classnames";

// @ts-ignore
const VideoComments = ({comments}) => {
    return (
        <View style={tw`bg-gray-800`}>
            <View style={tw`flex items-center my-3 `}>
                <Text style={tw`flex items-center justify-center text-lg text-gray-100`}>Comments for this video</Text>
            </View>
            <FlatList
                data={comments}
                renderItem={({item}) => <VideoComment comment={item} />}
            />
            <View style={tw`flex mx-3 absolute -bottom-36 w-96 rounded-full`}>
                <TextInput style={tw`h-10 bg-white pl-2 rounded-lg`} placeholder={"Write a new comment"} />
            </View>
        </View>
    )
}

export default VideoComments;
