import React from "react";
import {Stack} from 'expo-router'
// import Login from "./Login";

import { StatusBar } from "expo-status-bar";



function App() {

  return (
    <>
      <Stack>
        <Stack.Screen
          name="splashScreen"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="welcomeScreen"
          options={{ headerShown: false }}
        />
                 <Stack.Screen
          name="searchScreenn"
          options={{ headerShown: false }}
        />
                         <Stack.Screen
          name="newsDetailsScreen"
          options = {{animation: 'slide_from_bottom', headerShown: false}}
        />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light'/>
      </>
  );
}

export default App;
