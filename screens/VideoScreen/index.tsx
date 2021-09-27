import React from 'react';
import {View, Text, Image, ScrollView} from "react-native";
import tw from "tailwind-react-native-classnames";
import video from '../../assets/data/video.json';
import {AntDesign} from "@expo/vector-icons";

const VideoScreen = () => {

    let viewsString = video.views.toString();
    if (video.views > 1_000_000){
        viewsString = (video.views / 1_000_000).toFixed(1) + 'M'
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + 'K'
    }

    return (
        <View style={tw`mt-12`}>
            <View style={tw``}>
                <Image source={{uri: video?.thumbnail}} style={{width: '100%', aspectRatio: 16/9}} />
            </View>

            <View style={tw`flex flex-col px-3`}>
                <View style={tw`flex flex-row items-center mt-6`}>
                    <Text style={tw`text-blue-500`}>{video?.tags}</Text>
                </View>

                <View style={tw`mt-3`}>
                    <Text style={tw`text-lg text-gray-100`}>{video?.title}</Text>
                </View>

                <View style={tw`flex flex-row mt-3`}>
                    <Text style={tw`text-gray-300`}>{viewsString}</Text>
                    <Text style={tw`text-gray-300 ml-3`}>{video.createdAt}</Text>
                </View>

                <View style={tw`mt-3`}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={tw`flex items-center`}>
                            <AntDesign name="like1" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.likes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="dislike2" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="export" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={37} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
        </View>
    );
};

export default VideoScreen;
