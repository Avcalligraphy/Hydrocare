import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import React from 'react';
import 'react-native-gesture-handler';
import Router from './Router';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
