import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Google from '@/assets/images/Google.png';
import Facebook from '@/assets/images/Facebook.png';
import { Redirect, useRouter } from 'expo-router';
import { loginUser, setAuthToken } from '@/components/apis/apis';
import Loader from '@/assets/loader/loader.json';
import AnimatedLoader from "react-native-animated-loader";
import { useAuth } from '@/components/auth/authContext';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [username, setUsername] = useState('');
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  // Regular Expression for Email Validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateForm = () => {
    let isValid = true;
    let errorMessages: { email?: string; password?: string } = {};

    if (!email) {
      errorMessages.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      errorMessages.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!password) {
      errorMessages.password = 'Password is required';
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleLogin = async () => {
    if (!validateForm()) return; // Skip the login if form is invalid

    setLoading(true);
    try {
      const response = await loginUser({ email, password  , username });

      const { access, refresh } = response.data;

      setAuthToken(access);
      setIsAuthenticated(true);
      alert(`✅ Login Success\nStatus: ${response.status}\nMessage: Logged in successfully`);

      router.replace('/(tabs)');
    } catch (error: any) {
      const status = error?.response?.status || 'Unknown';
      const message = error?.response?.data?.detail || error.message || 'Something went wrong';

      alert(`❌ Login Failed\nStatus: ${status}\nMessage: ${message}`);
      console.error('Login Error:', error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedLoader
        visible={loading}
        overlayColor="rgba(255,255,255,0.75)"
        source={Loader}
        animationStyle={styles.lottie}
        speed={1}
      />
      {/* Top 30% Section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome</Text>
      </View>

      {/* Bottom 70% Section */}
      <View style={styles.formSection}>
      <Text style={styles.label}>Username</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, errors.email && { borderColor: 'red', borderWidth: 1 }]}
          placeholder="example@example.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }, errors.password && { borderColor: 'red', borderWidth: 1 }]}
            placeholder="••••••••"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={20} color="#333" />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.loginButton, { opacity: email && password ? 1 : 0.5 }]}
            onPress={handleLogin}
            disabled={!email || !password}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.forgotText}>Forgot Password?</Text>

          <Text style={styles.fingerprintText}>
            Or <Text style={styles.fingerprintLink} onPress={() => router.replace('(tabs)')}>Login</Text> via
          </Text>

          <View style={styles.socialContainer}>
            <Image source={Google} style={styles.logo} />
            <Image source={Facebook} style={styles.logo} />
          </View>

          <Text style={styles.bottomText}>
            Don’t have an account? <Text style={styles.signUpLink}  onPress={() => router.push('/signup')}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1fff5',
  },
  topSection: {
    height: height * 0.3,
    backgroundColor: '#00D09E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSection: {
    height: height * 0.7,
    padding: 24,
    backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#093030',
    fontFamily: 'NotoSans',
  },
  label: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600',
    color: '#031314',
    fontFamily: 'NotoSans',
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#DFF7E2',
    height: 41,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginTop: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFF7E2',
    borderRadius: 20,
    paddingRight: 16,
    marginTop: 8,
    marginHorizontal: 30,
  },
  buttonContainer: {
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00D09E',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginVertical: 8,
    width: 207,
    height: 45,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#093030',
    fontSize: 20,
    fontWeight: '600',
  },
  forgotText: {
    textAlign: 'center',
    color: '#222',
    fontWeight: '600',
  },
  fingerprintText: {
    marginTop: 30,
    textAlign: 'center',
    color: '#222',
  },
  fingerprintLink: {
    color: '#007bff',
    fontWeight: '600',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  logo: {
    marginBottom: 20,
  },
  bottomText: {
    marginTop: 30,
    textAlign: 'center',
    color: '#333',
  },
  signUpLink: {
    color: '#007bff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 30,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
