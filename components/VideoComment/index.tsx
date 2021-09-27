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

const VideoComment = (props: VideoCommentProps) => {
    return (
        <View style={{backgroundColor: '#141414', flex: 1}}>
            {/*<BottomSheetFlatList*/}
            {/*    data={comments}*/}
            {/*    renderItem={({item}) => <VideoComment comment={item} />}*/}
            {/*/>*/}

            <Image source={{uri: video?.user?.image}} style={tw`w-10 h-10 rounded-full`} />
            <Text style={tw`text-gray-100 ml-2`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, repellat.</Text>
        </View>
    )
}

export default VideoComment;
