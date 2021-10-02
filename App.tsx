import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import VideoScreen from "./screens/VideoScreen";
//@ts-ignore
import Amplify, {Auth, DataStore} from 'aws-amplify';
import config from './src/aws-exports';
//@ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import { User } from './src/models';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const App = () => {
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
      const user = (await DataStore.query(User)).find(user => user.sub === userId);
      if (!user) {
        // if not, save user to db.
        await DataStore.save(
            new User({
              sub: userId,
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
        <Navigation colorScheme={'dark'} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
