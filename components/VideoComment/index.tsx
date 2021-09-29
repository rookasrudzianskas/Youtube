import React from 'react'
import {View, Text, Image} from 'react-native'
import comments from '../../assets/data/comments.json';
import video from "../../assets/data/video.json";
import tw from "tailwind-react-native-classnames";
import { Comment } from '../../src/models';

interface VideoCommentProps {
    comment: Comment;
}

const VideoComment = ({comment}: VideoCommentProps) => {
    return (
        <View style={tw`flex flex-row items-center mx-3 my-1 bg-gray-700 p-2 rounded-xl`}>
            <Image source={{uri: comment?.User?.image}} style={tw`w-10 h-10 rounded-full`} />
            <Text style={tw`text-gray-100 ml-2`}>{comment?.comment}</Text>
            {/*<Text>Rokas</Text>*/}
        </View>
    )
}

export default VideoComment;
