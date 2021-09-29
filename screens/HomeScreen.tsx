import { DataStore } from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SuggestedWatch from "../components/SuggestedWatch";
// import VideoListItem from "../components/VideoListItem";
// import videos from '../assets/data/videos.json';
import VideoListItem from "../components/VideoListItem";

import { initSchema } from "@aws-amplify/datastore";
import { schema } from "../src/models/schema";
import { Video } from '../src/models';

// @ts-ignore
let models;
if (typeof window !== "undefined") {
    models = initSchema(schema);
}



const HomeScreen = () => {

    const [videos, setVideos] = useState<Video[]>([]);
    console.log("These are the videos", videos);

    useEffect(() => {
        // fetch videos
        DataStore.query(Video).then(setVideos);
    }, []);

    console.log("These are the videos", videos);
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
                    <VideoListItem key={item.id} video={item} />
                )}/>
            </View>
        </View>
    );
};

export default HomeScreen;
