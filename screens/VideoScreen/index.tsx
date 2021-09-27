import React, {useRef} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
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
    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.present();
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
                            <AntDesign name="like1" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.likes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="dislike2" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="export" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>

                        <View style={tw`flex items-center mx-3`}>
                            <AntDesign name="download" size={33} color="lightgrey" />
                            <Text style={tw`text-gray-200 mt-1`}>{video.dislikes}</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={tw`mt-3 border-t-2 border-gray-600  border-b-2 border-gray-600`}>
                    <View style={tw`flex flex-row items-center my-2`}>
                        <View style={tw``}>
                            <Image source={{uri: video?.user?.image}} style={tw`w-10 h-10 rounded-full`} />
                        </View>
                        <View style={tw`flex flex-col ml-2 justify-center flex-1`}>
                            <Text style={tw`text-gray-100 text-lg`}>{video.user.name}</Text>
                            <Text style={tw`text-gray-400`}>{video?.user?.subscribers} subscribers</Text>
                        </View>

                        <View style={tw`flex `}>
                            <Text style={tw`text-lg text-red-500`}>SUBSCRIBE</Text>
                        </View>
                    </View>
                </View>


                <View style={tw`mt-4`}>
                    <TouchableOpacity onPress={openComments} activeOpacity={0.8}>
                        <View style={tw``}>
                            <View style={tw`flex flex-row`}>
                                <Text style={tw`text-gray-100 text-lg`}>Comments</Text>
                                <Text style={tw`text-gray-400 text-lg ml-3`}>300</Text>
                            </View>
                            <View style={tw``}>
                                {/*<VideoComment comment={comments[0]}/>*/}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default VideoScreen;
