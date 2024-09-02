import React from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useQuery } from '@tanstack/react-query';
import { fetchBreakingNews, fetchRecommendedNews } from '../../utils/NewsApiCall';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header';
import Loading from '../../components/Loading'; 
import MiniHeader from '../../components/MiniHeader';
import BreakingNews from '../../components/BreakingNews';

const HomeScreen = () => {
  // Correctly destructure colorScheme from useColorScheme
  const { colorScheme } = useColorScheme();

  // Use React Query to fetch breaking news
  const { data: breakingNewsData, isLoading: isBreakingNewsLoading, error: breakingNewsError } = useQuery({
    queryKey: ["breakingNews"],
    queryFn: fetchBreakingNews,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  // Use React Query to fetch recommended news
  const { data: recommendedNewsData, isLoading: isRecommendedNewsLoading, error: recommendedNewsError } = useQuery({
    queryKey: ['recommendedNews'],
    queryFn: fetchRecommendedNews,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Header />

      {/* Display Breaking News */}
      {isBreakingNewsLoading ? (
        <Loading />
      ) : breakingNewsError ? (
        <Text>Error loading breaking news</Text>
      ) : (
        <View>
          <MiniHeader label="Breaking News" />
          <BreakingNews data={breakingNewsData.articles} />
        </View>
      )}

      {/* Display Recommended News */}
      {isRecommendedNewsLoading ? (
        <Loading />
      ) : recommendedNewsError ? (
        <Text>Error loading recommended news</Text>
      ) : (
        <View>
          <MiniHeader label="Recommended News" />
          {/* Here you can use a RecommendedNews component to display the articles */}
          {/* Replace this comment with your component or implementation */}
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
