import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider, useAuth } from '@/components/auth/authContext';
import { AuthGate } from '@/components/auth/AuthGate';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    NotoSans: require('../assets/fonts/NotoSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <AuthGate>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="landing" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="emiCalculatorScreen" options={{ headerShown: false }} />

        <Stack.Screen name="100timesin25Yrs" options={{ headerShown: false }} />
        <Stack.Screen name="bonusRule" options={{ headerShown: false }} />
        <Stack.Screen name="bugdetRule" options={{ headerShown: false }} />
        <Stack.Screen name="buyMF" options={{ headerShown: false }} />
        <Stack.Screen name="cagrRule" options={{ headerShown: false }} />
        <Stack.Screen name="carBuy" options={{ headerShown: false }} />
        <Stack.Screen name="carInsurance" options={{ headerShown: false }} />
        <Stack.Screen name="coupleBudgetRule" options={{ headerShown: false }} />
        <Stack.Screen name="healthPlan" options={{ headerShown: false }} />
        <Stack.Screen name="homeLoan" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="editProfile"  options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
     </AuthGate>
    </AuthProvider>
  );                                                                                                    
}
