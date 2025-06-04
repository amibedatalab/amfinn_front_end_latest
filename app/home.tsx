import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NetworthTilesScreen from '@/components/NetworthTilesScreen'
import RegistrationForm from '@/components/stepper';
import { Modal } from 'react-native';
import CarouselSlider from '@/components/slider';
import FadeCarousel from '@/components/carosuel';


const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

  const [showForm, setShowForm] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowForm(true);
  //   }, 3000);

  //   return () => clearTimeout(timer); // Clean up
  // }, []);
  return (

    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, Welcome Back</Text>
          <Text style={styles.subGreeting}>Good Morning</Text>
        </View>
        <View style={styles.circle}>
      <Icon name="notifications-outline" size={24} color="#000" />
    </View>
      </View>

      {/* Balance Info */}
      {/* <View style={styles.balanceSection}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.label}>Total Balance</Text>
            <Text style={styles.income}>$7,783.00</Text>
          </View>
          <View>
            <Text style={styles.label}>Total Expense</Text>
            <Text style={styles.expense}>-$1,187.40</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.goalText}>$20,000.00</Text>
        </View>
        <Text style={styles.percentText}>☑ 30% Of Your Expenses, Looks Good.</Text>
      </View> */}

      {/* Insights Box */}
      <View style={styles.mainComponent}>
      <FadeCarousel/>
      <NetworthTilesScreen/>
      </View>

      <Modal
  visible={showForm}
  transparent
  animationType="fade"
  onRequestClose={() => setShowForm(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <RegistrationForm onCancel={() => setShowForm(false)} onSubmit={() => setShowForm(false)} />
    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00D09E' },
  header: {
    marginTop: 70,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.15,
  },
  greeting: { fontSize: 20, lineHeight:22, fontWeight: '700', color: '#052224' , fontFamily:'NotoSans' },
  subGreeting: { fontSize: 14, fontWeight:'400' ,  color: '#052224' , fontFamily:'NotoSans' },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of width/height to make it a circle
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // optional: adds shadow on Android
    shadowColor: '#000', // optional: shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  mainComponent:{
    height: height * 0.85,
    backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  balanceSection: {
    paddingHorizontal: 54,
    paddingTop: 24,
    backgroundColor: '#00D09E',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: '#eee',
    marginBottom: 4,
  },
  income: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  expense: { fontSize: 18, fontWeight: 'bold', color: '#554DFF' },
  progressBarContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 12,
    backgroundColor: '#D3F4E4',
    borderRadius: 10,
    marginRight: 10,
  },
  progressFill: {
    height: 12,
    width: '30%',
    backgroundColor: '#444',
    borderRadius: 10,
  },
  goalText: { fontSize: 12, color: '#fff' },
  percentText: { marginTop: 6, color: '#fff', fontSize: 12 },
  insightBox: {
    backgroundColor: '#00D09E',
    borderRadius: 20,
    marginHorizontal:40,
    height:157,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20
  },
  insightLeft: {
    // backgroundColor: '#C4FFF0',
    padding: 5,
    // borderRadius: 20,
    alignItems: 'center',
    width: width * 0.25,
    borderRightWidth: 2,
    borderRightColor: '#F1FFF3',

  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 6,
    color:'#093030',
    lineHeight:20
  },
  insightSubtitle: { fontSize: 12 },
  insightRight: {
    justifyContent: 'space-around',
    width: width * 0.48,
    padding:20
  },
  insightRightMain:{
    flexDirection:'column'
  },
  bottomborder: {
    height: 2,
    backgroundColor: '#F1FFF3',
    width: '100%',       
    marginVertical: 8,
    alignSelf: 'stretch',
  },
  
  muted: { color: '#666', fontSize: 13 },
  blackText: { fontWeight: 'bold', color: '#000', fontSize: 14 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    // backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
     width: '90%',
    maxHeight: '60%',
    backgroundColor: '#fff',
    borderRadius: 20,
    // padding: 20,
    elevation: 5,
  },
  
});

export default HomeScreen;
