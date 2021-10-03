import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from "tailwind-react-native-classnames";

const VideoUploadScreen = () => {

    const [video, setVideo] = useState(null);

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


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            //@ts-ignore
            setVideo(result.uri);
        }
    };

    // @ts-ignore
    return (

        <View style={tw`flex flex-1`}>
            <View style={tw`mt-10 flex items-center flex-1`}>
                <Text style={tw`text-white text-lg`}>Upload Video</Text>
            </View>

            <View style={tw`flex mb-10`}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={tw`flex bg-gray-100 mx-10 rounded-lg`}>
                    <Button title="Pick a video from camera roll" onPress={pickImage} />
            {/*// @ts-ignore*/}
                    {video && <Image source={{ uri: video }} style={{ width: 200, height: 200 }} />}
                </View>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default VideoUploadScreen;

