import React from 'react'
import {View, Text, Image} from 'react-native'
import comments from '../../assets/data/comments.json';
import video from "../../assets/data/video.json";
import tw from "tailwind-react-native-classnames";

interface VideoCommentProps {
    comment: {
        id: string,
        createdAt: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        user: {
            name: string,
            image: string,
        }
    }
}

const VideoComment = ({comment}: VideoCommentProps) => {
    return (
        <View style={tw`flex flex-row items-center`}>
            <Image source={{uri: comment?.user?.image}} style={tw`w-10 h-10 rounded-full`} />
            <Text style={tw`text-gray-100 ml-2`}>{comment?.comment}</Text>
        </View>
    )
}

export default VideoComment;
