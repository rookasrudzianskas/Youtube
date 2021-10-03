import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from "tailwind-react-native-classnames";

const VideoUploadScreen = () => {

    const [image, setImage] = useState(null);

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
            setImage(result.uri);
        }
    };

    // @ts-ignore
    return (
        <View style={tw``}>
            <View style={tw`mt-10 flex items-center`}>
                <Text style={tw`text-white text-lg`}>Upload Video</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8}>
                <View style={tw`flex items-center justify-center mt-64 bg-gray-100 mx-10 rounded-lg`}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
            {/*// @ts-ignore*/}
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default VideoUploadScreen;

