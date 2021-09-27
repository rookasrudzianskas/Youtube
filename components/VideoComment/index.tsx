import React from 'react'
import {View, Text, Image} from 'react-native'
// import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';
import comments from '../../assets/data/comments.json';
import video from "../../assets/data/video.json";
import tw from "tailwind-react-native-classnames";

const VideoComments = () => {
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

export default VideoComments
