import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import BreakingNewsCard from './BreakingNewsCard';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const BreakingNews = ({ data, label }) => {
  const handleClick = (item) => {
    // Replace with your navigation logic
    router.push('newsDetailsScreen', item);
  };

  // Render Breaking News Card
  const renderItem = ({ item }) => (
    <BreakingNewsCard item={item} handleClick={handleClick} />
  );

  return (
    <View>
      {/* FlatList for horizontally scrolling list */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}  // or any unique identifier
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Swiper for sliding effect */}
      <Swiper
        style={{ height: width * 0.5 }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        activeDotStyle={{ backgroundColor: '#fff' }}
      >
        {data.map((item, index) => (
          <BreakingNewsCard key={index} item={item} handleClick={handleClick} />
        ))}
      </Swiper>
    </View>
  );
};

export default BreakingNews;
