import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '@/assets/images/secondPageLogo.png';

export default function Page() {
  const router = useRouter();

 
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    <Text style={styles.text}>AmFinWise</Text>
    <Text style={styles.paragraph}>Take control of your finances.
    Expert advice, smart management.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button , styles.signup]} onPress={() => router.push('/signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={[styles.forgetPassword]} onPress={() => router.push('/auth')}>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1FFF3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      marginBottom: 20,
    },
    text: {
      fontSize: 52,
      lineHeight:52,
      fontWeight: '600',
      color: '#00D09E',
      fontFamily: 'NotoSans',
    },
    paragraph:{
        fontSize: 14,
        fontWeight: '400',
        color: '#4B4544',
        fontFamily: 'NotoSans',
        paddingHorizontal: 32,
        textAlign:'center'
    },
    buttonContainer: {
      marginTop: 40,
      width: '80%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#00D09E',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 25,
      marginVertical: 8,
      width: 207,
      height:45,
      alignItems: 'center',
    },
    signup: {
      backgroundColor: '#DFF7E2',
    },
    buttonText: {
      color: '#093030',
      fontSize: 20,
      lineHeight:22,
      fontWeight: '600',
    },
    buttonTextSignUp:{
        color: '#DFF7E2',
        fontSize: 20,
        lineHeight:22,
        fontWeight: '600',
    },
    forgetPassword:{
        color:'#093030',
        fontSize:14,
        fontWeight:'600',
        paddingVertical: 0,
        paddingHorizontal: 32,
    }
  });
  
