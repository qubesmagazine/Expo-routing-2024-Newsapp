### : Simplify Your Expo Full Stack Development with Expo Router

Welcome to the repository for **"Master Expo Full Stack Development in 2024"**. This project demonstrates how to build a full stack mobile app using Expo SDK 51, focusing on the powerful new `expo-router`.

#### Why Expo Router?

Expo Router simplifies navigation by mapping your file system to navigational routes, similar to Next.js. This approach reduces boilerplate code and makes it easier to manage complex app structures.

#### Quick Setup

To get started, clone this repository and run:

```bash
npx create-expo-app@latest
```

The project is organized as follows:

```
App
  ├── (auth)
  │     ├── _layout
  │     ├── HomeScreen
  │     ├── SplashScreen
  │     └── WelcomeScreen
  └── (tabs)
        ├── _layout
        ├── Home
        ├── Saved
        └── Search
```

#### Implementing Routing

With Expo Router, managing screens within a stack is straightforward:

```javascript

import React from "react";
import { Stack } from 'expo-router';

function App() {
  return (
    <Stack>
      <Stack.Screen name="SplashScreen" options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="SearchScreen" options={{ headerShown: false }} />
    </Stack>
  );
}

export default App;
```

#### Tabs Layout

Easily set up tab navigation for your app:

```javascript

import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Saved" />
      <Tabs.Screen name="Search" />
    </Tabs>
  );
}

export default TabsLayout;
```

#### Conclusion

With Expo SDK 51 and its Router, full stack mobile app development is more accessible than ever. Follow along with this project to see how simple and powerful Expo Router can be.

