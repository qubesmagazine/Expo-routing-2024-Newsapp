import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Animated, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { frontimage, iconnews } from '../assets';
import { StatusBar } from 'expo-status-bar';

const Index = () => {
  // Animation value for rotation
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the rotation animation
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Interpolate rotation value
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        
        {/* Top Half with Image and Text */}
        <View style={styles.topHalf}>
          <ImageBackground
            source={frontimage}
            style={styles.imageBackground}
          >
            <Animated.Text style={[styles.newsAppText, { transform: [{ rotate }] }]}>
              News App
            </Animated.Text>
          </ImageBackground>
        </View>

        {/* Bottom Half with Details and Button */}
        <View style={styles.bottomHalf}>
          <Image source={iconnews}/>
          <Text style={styles.titleText}>
            Stay Informed from Day One
          </Text>
          <Text style={styles.descriptionText}>
            Discover the latest news with our seamless onboarding experience
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/home')}
          >
            <Text style={styles.buttonText}>Getting Started</Text>
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor='#161622' style='light'/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Dark background
  },
  topHalf: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  newsAppText: {
    fontSize: 42,
    color: '#fff',
    fontWeight: '1000', // Bolder and thicker text
    fontFamily: "bold",
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: 'white', // Blue background
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontFamily: "Poppins-Black",
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "Poppins-Black",
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1e3a8a', // Dark blue button
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Index;
