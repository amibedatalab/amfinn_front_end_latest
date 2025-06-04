import { View, Text, StyleSheet ,Image  } from 'react-native';
import Logo from '@/assets/images/logo.png'
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function LandingPage() {
     useEffect(() => {
        const timer = setTimeout(() => {
          router.replace('/landing'); // Navigate to Login/Signup after delay
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>AmFinWise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D09E',
  },
  text: {
    fontSize: 52,
    fontWeight: '600',
    color:'#fff',
    lineHeight:52,
    fontFamily: 'NotoSans',
  },
  logo: {
    width: 109, 
    height: 114,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
