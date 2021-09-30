import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Pressable,
    FlatList,
    SafeAreaView,
    ActivityIndicator
} from "react-native";
import tw from "tailwind-react-native-classnames";
import video from '../../assets/data/video.json';
import {AntDesign} from "@expo/vector-icons";
import videos from "../../assets/data/videos.json";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";
import BottomSheet, {BottomSheetModal} from "@gorhom/bottom-sheet";
import VideoComments from "../../components/VideoComments";
import VideoComment from "../../components/VideoComment";
import {useRoute} from "@react-navigation/native";
import { DataStore } from 'aws-amplify';
import {Video} from '../../src/models';
import {Comment} from '../../src/models';

const VideoScreen = () => {

    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.expand();
        // console.warn("Rokas");
    }

    // @ts-ignore
    const [video, setVideo] = useState<Video | undefined>();
    const [comments, setComments] = useState<Comment[]>([]);

    if(video === null) {
        return (
            <View style={tw`mt-24 flex items-center`}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={tw`text-2xl text-gray-100 mt-5 `}>Nothing here :(</Text>
                <Text style={tw`text-4xl text-green-500 mt-5 font-bold `}>404</Text>
            </View>
        )
    }


    //@ts-ignore
    let viewsString = video?.views.toString();
    //@ts-ignore
    if (video?.views > 1_000_000){
        //@ts-ignore
        viewsString = (video?.views / 1_000_000).toFixed(1) + 'M';
        //@ts-ignore
    } else if (video?.views > 1_000) {
        //@ts-ignore
        viewsString = (video?.views / 1_000).toFixed(1) + 'K';
    }

    const route = useRoute();
    // @ts-ignore
    const videoId = route?.params?.id;

    useEffect(() => {
        DataStore.query(Video, videoId).then(setVideo);
    }, [videoId]);


    useEffect(() => {
        const fetchComments = async () => {
            if(!video) {return}
            const videoComments = (await DataStore.query(Comment)).filter(
                (comment) => comment.videoID === video.id
            );
            console.log(videoComments);
            setComments(videoComments);
        };

        fetchComments();
    }, [video]);


    // @ts-ignore
    return (
        <View style={tw`mt-12`}>
            <View style={tw``}>
                {/*<Image source={{uri: video?.thumbnail}} style={{width: '100%', aspectRatio: 16/9}} />*/}
    {/*// @ts-ignore*/}
                <VideoPlayer thumbnailURI={video?.thumbnail} videoURI={video?.videoUrl}/>
            </View>

            <View style={tw`flex`}>
            <ScrollView>
                <View style={tw`flex flex-col px-3`}>
                    <View style={tw`flex flex-row items-center mt-6`}>
                        <Text style={tw`text-blue-500`}>{video?.tags}</Text>
                    </View>

                    <View style={tw`mt-3`}>
                        <Text style={tw`text-lg text-gray-100`}>{video?.title}</Text>
                    </View>

                    <View style={tw`flex flex-row mt-3`}>
                        <Text style={tw`text-gray-300`}>{viewsString}</Text>
                        <Text style={tw`text-gray-300 ml-3`}>{video?.createdAt}</Text>
                    </View>

                    <View style={tw`mt-3`}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View style={tw`flex items-center`}>
                                <AntDesign name="like1" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.likes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="dislike2" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="export" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.dislikes}</Text>
                            </View>

                            <View style={tw`flex items-center mx-3`}>
                                <AntDesign name="download" size={33} color="lightgrey" />
                                <Text style={tw`text-gray-200 mt-1`}>{video?.dislikes}</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={tw`mt-3 border-t-2 border-gray-600  border-b-2 border-gray-600`}>
                        <View style={tw`flex flex-row items-center my-2`}>
                            <View style={tw``}>
                                <Image source={{uri: video?.User?.image}} style={tw`w-10 h-10 rounded-full`} />
                            </View>
                            <View style={tw`flex flex-col ml-2 justify-center flex-1`}>
                                <Text style={tw`text-gray-100 text-lg`}>{video?.User?.name}</Text>
                                <Text style={tw`text-gray-400`}>{video?.User?.subscribers} subscribers</Text>
                            </View>

                            <View style={tw`flex `}>
                                <Text style={tw`text-lg text-red-500`}>SUBSCRIBE</Text>
                            </View>
                        </View>
                    </View>


                    <View style={tw`mt-4 flex`}>
                        <Pressable>
                            <View style={tw``}>
                                <View style={tw`flex flex-row`}>
                                    <Text style={tw`text-gray-100 text-lg`}>Comments</Text>
                                    <Text style={tw`text-gray-400 text-lg ml-3`}>300</Text>
                                </View>
                                <View style={tw``}>
                                    <TouchableOpacity  onPress={openComments} activeOpacity={0.8}>
                                        <View style={tw`flex flex-row items-center my-2`}>
                                    {/*<VideoComment comment={comments[0]}/>*/}
                                            <Text style={tw`text-white`}>Open the comments</Text>
                                            {/*<VideoComments />*/}

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                    <View style={tw`mt-10`}>
                        {/*<VideoListItem />*/}
                        <FlatList style={{marginBottom: 250}} data={videos} renderItem={({item}) => (
                            //@ts-ignore
                            <VideoListItem key={item.id} video={item} />
                        )}/>
                    </View>
                </View>
            </ScrollView>

            <BottomSheet
                style={tw`bg-gray-800`}
                backgroundComponent={() => <View style={{backgroundColor: 'blue'}} />}
                ref={commentsSheetRef} snapPoints={[0, '100%']} index={-1}>
                <View style={tw`flex bg-gray-800 flex-1`}>
                    {/*@ts-ignore*/}
                    {comments.length > 0 && <VideoComments videoID={video.id} comments={comments}/>}
                </View>
            </BottomSheet>

            </View>
        </View>
    );
};

export default VideoScreen;


// const VideoScreenWithRecommendation = () => {
//     return (
//         <SafeAreaView style={{backgroundColor: '#141414', flex: 1}}>
//             <BottomSheetModalProvider>
//                 <FlatList
//                     data={videos}
//                     renderItem={({item}) => <VideoListItem video={item} />}
//                     ListHeaderComponent={VideoScreen}
//                 />
//             </BottomSheetModalProvider>
//         </SafeAreaView>
//     )
// }
//
// export default VideoScreenWithRecommendation;

// done with comments
