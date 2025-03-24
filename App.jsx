import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import SmartechBaseReact from 'smartech-base-react-native';

const App = () => {
  useEffect(() => {
    SmartechBaseReact.setUserIdentity("swayam146", (result, error) => {
      if (error) {
        console.error("Failed to set user identity", error);
      } else {
        console.log(result);
      }
    })
  }, []);
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
