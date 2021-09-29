import { DataStore } from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SuggestedWatch from "../components/SuggestedWatch";
// import videos from '../assets/data/videos.json';
import VideoListItem from "../components/VideoListItem";
import { Video } from '../src/models';



const HomeScreen = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            // @ts-ignore
            // fetch videos
            const response = await DataStore.query(Video);
            setVideos(response);
        }

        fetchVideos();

        // DataStore.query(Video).then(setVideos);
    }, []);
    return (
        <View style={tw`flex`}>
            {/*  Header   */}
            <View style={tw``}>
                <Header />
                <SuggestedWatch />
            </View>

            <View style={tw``}>
                {/*<VideoListItem />*/}
                <FlatList style={{marginBottom: 350}} data={videos} renderItem={({item}) => (
    // @ts-ignore
                    <VideoListItem key={item.id} video={item} />
                )}/>
            </View>
        </View>
    );
};

export default HomeScreen;
