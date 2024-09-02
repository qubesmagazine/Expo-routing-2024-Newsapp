
// src/utils/fetchNews.js

import axios from 'axios';
import { newsApiKey } from "./apikey"; // Ensure your API key is stored securely

const apiBaseUrl = 'https://newsapi.org/v2';

// Helper function to construct the full URL for API requests
const constructUrl = (path, params = {}) => {
  const url = new URL(`${apiBaseUrl}/${path}`);
  params['apikey'] = newsApiKey; // Add API key to the parameters
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url.toString();
};

// Generic function to make an API call
export const newsApiCall = async (url, params = {}) => {
  try {
    const fullUrl = constructUrl(url, params);
    const response = await axios.get(fullUrl); // Simplified to axios.get for clarity
    console.log(`Fetching data from: ${fullUrl}`); // Debugging log
    console.log(`Received data: `, response.data); // Debugging log
    if (response.data.articles) {
      console.log(`Number of articles fetched: ${response.data.articles.length}`);
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error); // Improved error handling
    return {}; // Return an empty object in case of an error
  }
};


// src/utils/fetchNews.js

// Fetch Breaking News
export const fetchBreakingNews = async () => {
    return await newsApiCall('top-headlines', { country: 'us' });
  }
  
  // Fetch Recommended News
  export const fetchRecommendedNews = async () => {
    return await newsApiCall('top-headlines', { country: 'us', category: 'business' });
  }
  
  // Fetch Discover News
  export const fetchDiscoverNews = async (discover) => {
    return await newsApiCall('top-headlines', { country: 'us', category: discover });
  }
  
  // Fetch Search News
  export const fetchSearchNews = async (query) => {
    return await newsApiCall('everything', { q: query });
  }
  



// import { newsApiKey } from "./apikey";

// import axios from 'axios';


// // src/utils/fetchNews.js
// export const fetchNews = async (endpoint) => {
//     try {
//       const response = await fetch(`https://api.yournewsapi.com/${endpoint}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer YOUR_API_KEY'  // Use your actual API key here
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Fetching news data failed:", error);
//       return null;
//     }
//   };
  







// const apiBaseUrl = 'https://newsapi.org/v2';

// // Make sure to use your actual API key here
// const breakingNewsUrl = `${apiBaseUrl}/top-headlines?country=us&apikey=${newsApiKey}`; 
// const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country=us&category=business&apikey=${newsApiKey}`;

// const discoverNewsUrl = (discover) => `${apiBaseUrl}/top-headlines?country=us&category=${discover}&apikey=${newsApiKey}`;
// const searchNewsUrl = (query) => `${apiBaseUrl}/everything?q=${query}&apikey=${newsApiKey}`;

// const newsApiCall = async (endpoint, params) => {
//     const options = {
//        method: "GET",
//        url: endpoint,
//        params: params ? params : {},
//     };
 
//     try {
//          console.log(`Fetching data from: ${endpoint}`); // Log when a request starts
//          const response = await axios.request(options);
//          console.log(`Received data: `, response.data); // Log the received response
//          if (response.data.articles) {
//              console.log(`Number of articles fetched: ${response.data.articles.length}`);
//          }
//          return response.data;
//     } catch(error){
//      console.error(`Error fetching data from ${endpoint}:`, error); // Log any errors
//      return {};
//     }
//  }
 

// export const fetchBreakingNews = async () => {
//     return await newsApiCall(breakingNewsUrl);
// }

// export const fetchRecommendedNews = async () => {
//     return await newsApiCall(recommendedNewsUrl);
// }

// export const fetchDiscoverNews = async (discover) => {
//     return await newsApiCall(discoverNewsUrl(discover));
// }

// export const fetchSearchNews = async (query) => {
//     const endpoint = searchNewsUrl(query);
//     return await newsApiCall(endpoint);
// }






