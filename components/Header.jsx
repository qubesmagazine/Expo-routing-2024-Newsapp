import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'
import { router } from 'expo-router';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const Header = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();


  return (
    <View className="flex-row justify-between items-center mx-4 mt-4">
    <View>
      <Text className="text-2xl text-blue-800 dark:text-white uppercase" style={{
        fontFamily: "SpaceGroteskSemiBold"
      }}>
        stack news
      </Text>
    </View>
    <View className="flex-row space-x-4 rounded-full justify-center items-center"> 
      <Switch value={colorScheme == "dark"} onChange={toggleColorScheme}/>

      <TouchableOpacity
      onPress={() => router.push('searchScreen')}
      className="bg-gray-200 dark:bg-blue-800 rounded-full p-2"
      >
<MagnifyingGlassIcon
size={25}
strokeWidth={2}
color={colorScheme == "dark" ? "white" : "green"}
/>

      </TouchableOpacity>
    </View>
    </View>

    
  )
}

export default Header

const styles = StyleSheet.create({})