import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from "tailwind-react-native-classnames";
import VideoPlayer from "../../components/VideoPlayer";
import "react-native-get-random-values";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {Storage} from 'aws-amplify';
import * as VideoThumbnails from 'expo-video-thumbnails';



const VideoUploadScreen = () => {

    const [video, setVideo] = useState<string | null>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    const pickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setVideo(result.uri);
        }
    };

    // @ts-ignore
    const uploadVideo = async(): Promise<string | null> => {
        if(!video) {
            // @ts-ignore
            return null;
        }
        try {
            // @ts-ignore
            const response = await fetch(video);
            const blob = await response.blob();
            const fileKey = `${uuidv4()}.mp4`;
            await Storage.put(fileKey, blob);
            console.warn("DONE");
            return fileKey;
        } catch (err) {
            console.log('Error uploading file:', err);
            return null;
        }
    }

    const uploadPost = async () => {
        if (!video) {
            return;
        }
        const fileKey = await uploadVideo();
    }

    // @ts-ignore
    return (

        <View style={tw`flex flex-1`}>
            <View style={tw`mt-10 flex items-center flex-1`}>
                <Text style={tw`text-white text-lg`}>Upload Video</Text>
            </View>

            <View style={tw`flex mb-10`}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={tw`flex bg-gray-100 mx-10 rounded-lg`}>
                    {!video && <Button title="Pick a video from camera roll" onPress={pickVideo} />}
            {/*// @ts-ignore*/}
                    <View style={{position: 'absolute', top: -700}}>
                        {video && <VideoPlayer videoURI={video}/>}
                    </View>
                </View>
            </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={uploadPost}>
                    {video && <View style={[{position: 'absolute', top: -10, right: 185}, tw`bg-white p-2 rounded-lg`]}>
                        <Text style={tw`text-black`}>
                            Upload
                        </Text>
                    </View>}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default VideoUploadScreen;

