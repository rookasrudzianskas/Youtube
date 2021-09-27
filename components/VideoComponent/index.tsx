import React from 'react';
import {View, Image, Text, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo} from "@expo/vector-icons";

const VideoComponent = () => {
    return (
        <View style={tw``}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={tw``}>
                    <View>
                    <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.jpeg'}} style={{ width: '100%', aspectRatio: 16/9 }} />
                        <View style={tw`bg-black opacity-75 rounded-md h-5 w-12 flex items-center justify-center absolute right-2 bottom-4`}>
                            <Text style={tw`text-white`}>14:53</Text>
                        </View>
                    </View>

                        <View style={tw`mt-3 pl-2`}>
                        {/*    avatar   */}
                                <View style={tw`flex flex-row items-center `}>
                                <View style={tw`w-10 h-10`}>
                                    <Image style={tw`w-14 h-14 rounded-full`} source={{uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg'}} />
                                </View>

                            {/*    middle container */}
                                <View style={tw`flex flex-row items-center justify-center`}>
                                    <View style={tw`flex mr-10`}>
                                    <View style={tw`ml-6 flex flex-col justify-center mt-3`}>
                                        <Text numberOfLines={2} style={tw`text-gray-100`}>Turning a Failed Dropshipping Store Profitable</Text>
                                        <View style={tw`flex flex-row mt-1`}>
                                            <Text style={tw`text-gray-400 mr-3`}>
                                                Rokas Rudzianskas
                                            </Text>

                                            <Text style={tw`text-gray-400 mr-3`}>
                                                778K Views
                                            </Text>

                                            <Text style={tw`text-gray-400`}>
                                                1 year ago
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                </View>
                                    <View>
                                        <View style={tw`-ml-2`}>
                                            <Entypo name="dots-three-vertical" size={24} color="white" />
                                        </View>
                                    </View>
                            </View>

                        {/*    title row    */}
                        </View>
                </View>
                </TouchableOpacity>
        </View>
    );
};

export default VideoComponent;
