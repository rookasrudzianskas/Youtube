import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from "tailwind-react-native-classnames";
import VideoPlayer from "../../components/VideoPlayer";
import "react-native-get-random-values";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {Storage, DataStore, Auth} from 'aws-amplify';
import * as VideoThumbnails from 'expo-video-thumbnails';
// @ts-ignore
import {Video, User} from '../../src/models';
import {useNavigation} from "@react-navigation/native";



const VideoUploadScreen = () => {

    const [video, setVideo] = useState<string | null>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [duration, setDuration] = useState(0);
    const [title, setTitle] = useState("");
    const [progress, setProgress] = useState(0.0);

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

    const generateThumbnail = async () => {
        if(!video) {
            return null;
        }

        const { uri } = await VideoThumbnails.getThumbnailAsync(video, {
            time: 1000,
        });

            try {
                // @ts-ignore
                const response = await fetch(uri);
                const blob = await response.blob();
                const fileKey = `${uuidv4()}.jpg`;
                await Storage.put(fileKey, blob);
                console.warn("DONE WITH IMAGE");
                return fileKey;
            } catch (err) {
                console.log('Error uploading file:', err);
                return null;
            }

    }


    const pickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setVideo(result.uri);
            // @ts-ignore
            setDuration(Math.floor(result.duration / 100));
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
            await Storage.put(fileKey, blob, {
                progressCallback: (p) => {
                    console.log(progress);
                    setProgress(p.loaded / p.total);
                }
            });
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
        const thumbnailKey = await generateThumbnail();

        const userInfo = await Auth.currentAuthenticatedUser();
        const userSub = userInfo.attributes.sub;

        const user = (await DataStore.query(User)).find((u) => u.sub === userSub);

        if (!user || !fileKey || !thumbnailKey) {
            console.error("User not found");
            return;
        }

        await DataStore.save(
            new Video({
                title,
                thumbnail: thumbnailKey,
                videoUrl: fileKey,
                duration,
                views: 0,
                likes: 0,
                dislikes: 0,
                userID: user.id,
            })
        );


        setVideo(null);
        setDuration(0);
        setTitle("");
        setProgress(0);

        const navigation = useNavigation();
        // @ts-ignore
        navigation.navigate('HomeScreen');
    }

    // @ts-ignore
    return (

        <View style={tw`flex flex-1`}>
                <View
                    style={{
                        width: `${progress * 100}%`,
                        height: 3,
                        backgroundColor: "blue",
                        marginTop: 100
                    }}
                />
            <View style={tw`mt-10 flex items-center flex-1`}>
                <Text style={tw`text-white text-lg`}>Upload Video</Text>
            </View>



            <View style={tw`flex mb-10`}>
                {video && <View style={tw``}>
                    <TextInput
                        placeholder="Enter the video title ????"
                        value={title}
                        onChangeText={setTitle}
                        style={tw`
                            bg-white
                            mx-10
                            py-3
                            rounded-lg
                            px-2
                            mb-64
                        `}
                    />
                </View>}
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

