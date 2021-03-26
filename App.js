
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './app/screens/home';
import RootStackScreen, { HomeStack } from './app/config/router';

const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStackScreen/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
