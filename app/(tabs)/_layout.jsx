
import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from "nativewind";
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  const { colorScheme, toggleColorScheme} = useColorScheme()
  return (
    <>
      <Tabs
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === "home"){
              iconName = "home"
            } else if (route.name === "discover") {
              iconName = "compass-outline";
            } else if (route.name === "saved") {
              iconName = "bookmark-outline";
            } else if (route.name === "search") {
              iconName = "search-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
              name={iconName}
              size={customizeSize}
              color={focused ? '#1e3a8a' : "gray"}
              
              />
            )
          },
          tabBarActiveTintColor: "#1e3a8a",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGroteskMedium"
          },
          tabBarStyle: {
            backgroundColor: colorScheme === "dark" ? 'black' : "white"  
          }
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
            <Tabs.Screen
          name="discover"
          options={{
            title: 'Discover',
            headerShown: false,
          }}
        />
          <Tabs.Screen
          name="saved"
          options={{
            title: 'Saved',
            headerShown: false,
          }}
        />
              <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};


export default TabsLayout;





// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { Tabs } from 'expo-router';
// import { icons } from '../../constants';

// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View style={styles.iconContainer}>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         style={[styles.icon, { tintColor: color }]}
//       />
//       <Text style={[focused ? styles.fontPsemibold : styles.fontPregular, { color }]}>
//         {name}
//       </Text>
//     </View>
//   );
// };

// const TabsLayout = () => {
//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: '#FFA001',
//           tabBarInactiveTintColor: '#CDCDE0',
//           tabBarStyle: styles.tabBar,
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             title: 'Home',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: 'Profile',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="search"
//           options={{
//             title: 'Search',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.search} color={color} name="Search" focused={focused} />
//             ),
//           }}
//         />
//       </Tabs>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 8,
//     gap: 4, // Use padding, margin, or similar spacing style as needed
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   fontPsemibold: {
//     fontFamily: 'Psemibold',
//     fontSize: 12,
//   },
//   fontPregular: {
//     fontFamily: 'Pregular',
//     fontSize: 12,
//   },
//   tabBar: {
//     backgroundColor: '#161622',
//     borderTopWidth: 1,
//     borderTopColor: '#232533',
//     height: 84,
//   },
// });

// export default TabsLayout;
