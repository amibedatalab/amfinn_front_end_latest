import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useAuth } from '@/components/auth/authContext';  // Import the Auth context
import { useRouter } from 'expo-router';  // Import useRouter for navigation
const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  const { logout } = useAuth();  // Access the logout function from Auth context
  const router = useRouter();  // Router to navigate after logout

  const handleLogout = async () => {
    await logout();  // Call the logout function
    router.replace('/login');  // Redirect to login screen after logout
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>John Smith</Text>
      <Text style={styles.id}>ID: 25030024</Text>

      <ScrollView style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('editProfile')}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E6FFF2' },
  header: { backgroundColor: '#00C897', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center', justifyContent: 'center', height: height * 0.3 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'white', marginTop: 50 },
  name: { textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  id: { textAlign: 'center', fontSize: 14, color: 'gray', marginBottom: 20 },
  menu: { marginHorizontal: 30, height: height * 0.7 },
  menuItem: { backgroundColor: '#B2F0E7', padding: 15, borderRadius: 15, marginBottom: 15 },
  menuText: { fontSize: 16 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#E6FFF2', borderTopLeftRadius: 30, borderTopRightRadius: 30 }
});

export default ProfileScreen;
