import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const BreakingNewsCard = ({ item, handleClick }) => {
   


  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View className="relative">
        <Image
          source={{
            uri: item.urlToImage || 'https://png.pngitem.com/pimgs/s/439-4390399_placeholder-image-newsletter-clipart-hd-png-download.png',
          }}
          style={{
            width: width * 0.8,
            height: height * 0.22,
          }}
          resizeMode="cover"
          className="rounded-3xl"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View className="absolute bottom-6 left-4 justify-end h-[80%]">
          <View className="space-y-1">
            <View className="max-w-[98%]">
              <Text className="text-white text-base font-semibold capitalize">
                {item.title.length > 60 ? item.title.slice(0, 58) + '...' : item.title.split(' - ')[0] || 'N/A'}
              </Text>
            </View>
            <View>
              <Text>
                {item?.author?.length > 60 ? item?.title.slice(0, 20) + '...' : item?.author}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BreakingNewsCard;






