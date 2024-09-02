import React, { useEffect } from 'react'
import {SplashScreen, Stack} from 'expo-router'
import {useFonts} from 'expo-font'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient()

const RootLayout = () => {
 

    const [fontsLoaded, error] = useFonts({
        "SpaceGroteskMedium": require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
        "SpaceGroteskSemiBold": require("../assets/fonts/Roboto-Medium.ttf"),
        "SpaceGroteskBold": require("../assets/fonts/SpaceMono-Regular.ttf"),
      });
    
      useEffect(() => {
if(error) throw error
if(fontsLoaded) SplashScreen.hideAsync()
      }, [fontsLoaded, error])


      if(!fontsLoaded && !error) return null
     
  return (

    <QueryClientProvider client={queryClient}>
<Stack>
    <Stack.Screen name='index' options={{headerShown: false}}/>
    <Stack.Screen name='(auth)' options={{headerShown: false}}/>
    <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
</Stack>

</QueryClientProvider>

  )

}

export default RootLayout
