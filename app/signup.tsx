import { registerUser } from '@/components/apis/apis';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Loader from '@/assets/loader/loader.json';
import AnimatedLoader from "react-native-animated-loader";


const { height, width } = Dimensions.get('window');

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSignUp = async () => {
    const { fullName, email, phone, dob, password, confirmPassword } = form;

    if (!fullName || !email || !phone || !dob || !password || !confirmPassword) {
      return Alert.alert('Validation Error', 'All fields are required.');
    }

    if (password !== confirmPassword) {
      return Alert.alert('Password Mismatch', 'Passwords do not match.');
    }

    try {
      console.log('Form data:', form);
      setLoading(true);
      const response = await registerUser({
        username:dob,
        full_name: fullName,
        email,
        phone_number : phone,
        password,
        mpin:'9937'
      });
      console.log('Response from registerUser:', response); // ✅ Optional: log response
      Alert.alert('Success', `Status: ${response.status}\n${response.data.message || 'Registration successful!'}`);
      router.push('/login'); // redirect to login screen
    } catch (error: any) {
      console.error(error);
      Alert.alert(
        'Sign Up Failed',
        `Status: ${error?.response?.status || 500}\n${error?.response?.data?.message || error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={loading}
        overlayColor="rgba(255,255,255,0.75)"
        source={Loader}
        animationStyle={styles.lottie}
        speed={1}
      />
      {/* Top Header */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="" value={form.fullName}
            onChangeText={text => handleChange('fullName', text)} />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="" value={form.email}
            onChangeText={text => handleChange('email', text)} keyboardType="email-address" />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder="" keyboardType="phone-pad" value={form.phone}
            onChangeText={text => handleChange('phone', text)} />

          <Text style={styles.label}>User Name</Text>
          <TextInput style={styles.input} placeholder="" value={form.dob}
            onChangeText={text => handleChange('dob', text)} />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder=""
              value={form.password}
              onChangeText={text => handleChange('password', text)}
            />
            <Text onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>👁</Text>
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showConfirmPassword}
              placeholder=""
              value={form.confirmPassword}
              onChangeText={text => handleChange('confirmPassword', text)}
            />
            <Text onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>👁</Text>
          </View>

          {/* Terms and Policy */}
          <Text style={styles.termsText}>
            By continuing, you agree to{" "}
            <Text style={styles.boldText}>Terms of Use</Text> and{" "}
            <Text style={styles.boldText}>Privacy Policy</Text>.
          </Text>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Bottom login link */}
          <Text style={styles.loginLink}>
            Already have an account? <Text style={styles.loginText}>Log In</Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D09E',
  },
  topSection: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSection: {
    height: height * 0.9,
    backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    backgroundColor: '#E4F7E8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#444',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4F7E8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: '#444',
  },
  eyeIcon: {
    fontSize: 16,
    color: '#444',
    paddingLeft: 8,
  },
  termsText: {
    marginTop: 16,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: '600',
    color: '#000',
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: '#00D09E',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 13,
    color: '#444',
  },
  loginText: {
    color: '#00D09E',
    fontWeight: '500',
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default SignUpScreen;
