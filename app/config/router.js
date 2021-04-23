
import React,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from '../screens/splash';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Language from '../screens/language';
import MapScreen from '../screens/mapscreen';
import Loader from '../screens/loader';

const Drawer = createDrawerNavigator();  

const Stack = createStackNavigator()



export function MenuStack() {

  // const [count, setCount] = useState(0)

  return (
    <Drawer.Navigator 
        initialRouteName="screen1" 
        drawerPosition='right'
        drawerStyle={{
        }}
        >
        <Drawer.Screen name="screen1" component={Screen1} />
        <Drawer.Screen name="screen2" component={Screen2} />
        <Drawer.Screen name="language" component={Language} />
        <Drawer.Screen name="mapscreen" component={MapScreen} />
        <Drawer.Screen name="loader" component={Loader} />
      </Drawer.Navigator>
  );
}

export default function RootStackScreen(){

  return(
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="App"
        component={MenuStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
};

