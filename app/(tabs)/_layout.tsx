import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Home from '@/assets/images/Home.png'
import Profile from '@/assets/images/Profile.png'
import Transaction from '@/assets/images/Transactions.png'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      // screenOptions={{
      //   tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      //   headerShown: false,
      //   tabBarButton: HapticTab,
      //   tabBarBackground: TabBarBackground,
      //   tabBarStyle: Platform.select({
      //     ios: {
      //       // Use a transparent background on iOS to show the blur effect
      //       position: 'absolute',
      //     },
      //     default: {},
      //   }),
      screenOptions={{
        tabBarActiveTintColor: '#DFF7E2',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#E5F8EC',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: 80,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          marginTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <Image source={Home} style={{ width: 28 }} />,
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <Image source={Transaction} style={{ width: 35 }} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Image source={Profile} style={{ width: 28 }}/>,
        }}
      />
      <Tabs.Screen
  name="editProfile"
  options={{
    href: null, // 👈 This will hide it from the tab bar
  }}
/>
    </Tabs>
  );
}
