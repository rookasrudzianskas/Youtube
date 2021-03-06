import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Amplify, { Auth, DataStore } from "aws-amplify";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
Amplify.configure(config);

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import VideoScreen from "./screens/VideoScreen";

import { User } from "./src/models";

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const saveUserToDB = async () => {
      // get user  from cognito
      const userInfo = await Auth.currentAuthenticatedUser();

      if (!userInfo) {
        return;
      }
      const userId = userInfo.attributes.sub;

      // check if user exists in DB
      // @ts-ignore
      const user = (await DataStore.query(User)).find(user => user.sub == userId);
      if (!user) {
        // if not, save user to db.
        await DataStore.save(
            new User({
        // @ts-ignore
              sub: userId.toString(),
              name: userInfo.attributes.email,
              subscribers: 0,
            })
        );
      } else {
        console.warn("User already exists in DB");
      }
    };

    saveUserToDB();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <Navigation colorScheme={"dark"} />
          <StatusBar />
        </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
