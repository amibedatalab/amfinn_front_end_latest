import React, { useState } from 'react';
import { View, Text, Image, TextInput, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('John Smith');
  const [phone, setPhone] = useState('+44 555 5555 55');
  const [email, setEmail] = useState('example@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

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

      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Push Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Turn Dark Theme</Text>
          <Switch value={darkTheme} onValueChange={setDarkTheme} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E6FFF2' },
  header: { backgroundColor: '#00C897', height: 150, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'white', marginTop: 50 },
  name: { textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  id: { textAlign: 'center', fontSize: 14, color: 'gray', marginBottom: 20 },
  form: { marginHorizontal: 30, marginTop: 20 },
  label: { marginBottom: 5, fontWeight: 'bold' },
  input: { backgroundColor: '#B2F0E7', borderRadius: 10, padding: 10, marginBottom: 15 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  switchLabel: { fontSize: 16 },
  button: { backgroundColor: '#00C897', padding: 15, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' }
});

export default EditProfileScreen;
