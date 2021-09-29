import React, {useState} from 'react'
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';
import tw from "tailwind-react-native-classnames";

import {Comment} from '../../src/models';
import {Auth, DataStore} from 'aws-amplify';

interface VideoCommentsProps {
    comments: Comment[],
    videoID: string,
}
// @ts-ignore
const VideoComments = async ({comments, videoID}: VideoCommentsProps) => {

    const [newComment, setNewComment] = useState('');
    const userInfo = await Auth.currentAuthenticatedUser();
    const sendComment = async () => {
        await DataStore.save(new Comment({
            comment: newComment,
            likes: 0,
            dislikes: 0,
            replies: 0,
            videoID: videoID,
            userID: userInfo.,
        }));

        setNewComment('');
    }

    return (
        <View style={tw`bg-gray-800`}>
            <View style={tw`flex items-center my-3 `}>
                <Text style={tw`flex items-center justify-center text-lg text-gray-100`}>Comments for this video</Text>
            </View>
            <FlatList
                data={comments}
                renderItem={({item}) => <VideoComment comment={item}/>}
            />
            <View style={tw`flex mx-3 absolute -bottom-36 w-96 rounded-full`}>
                <TextInput value={newComment} onChangeText={setNewComment} style={tw`h-10 bg-white pl-2 rounded-lg`}
                           placeholder={"Write a new comment"}/>
                <TouchableOpacity onPress={sendComment} activeOpacity={0.8}>
                    <View style={tw`mt-4 bg-green-500 w-36 flex items-center py-2 rounded-lg`}>
                        <Text style={tw`font-bold text-gray-100`}>Comment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VideoComments;
