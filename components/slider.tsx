import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const insightSlides = [
    {
      icon: 'wallet-outline',
      title: 'Wealth',
      subtitle: 'In Control',
      description: 'From budgeting to building wealth — your complete personal finance guide in one app.',
      color: '#00D09E',
    },
    {
      icon: 'calendar-outline',
      title: 'Planning',
      subtitle: 'With Purpose',
      description: 'Track your net worth, optimize investments, and plan for every life milestone.',
      color: '#FF9F1C',
    },
    {
      icon: 'analytics-outline',
      title: 'Insights',
      subtitle: 'That Matter',
      description: 'Visual breakdowns of your expenses, goals, and investment performance — all simplified.',
      color: '#3D5A80',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Security',
      subtitle: 'Smartly Insured',
      description: 'Get clear on life, health, and car insurance needs — secure your future confidently.',
      color: '#1FAB89',
    },
    {
      icon: 'trending-up-outline',
      title: 'Growth',
      subtitle: 'By Design',
      description: 'Mutual funds, gold, stocks — grow your wealth with data-backed decisions.',
      color: '#FF6B6B',
    },
    {
      icon: 'calculator-outline',
      title: 'Tools',
      subtitle: 'To Decide Better',
      description: 'From SIPs to EMIs — use built-in calculators to crunch numbers on the go.',
      color: '#8E44AD',
    },
    {
      icon: 'car-outline',
      title: 'Goals',
      subtitle: 'Like a Car or Home',
      description: 'Planning for a car or house? Use our rules to know what’s smart and sustainable.',
      color: '#00B8A9',
    },
    {
      icon: 'cash-outline',
      title: 'Savings',
      subtitle: 'That Stick',
      description: 'Apply the 50-30-20 rule or couple budgeting strategies to boost your savings game.',
      color: '#FFC107',
    },
    {
      icon: 'star-outline',
      title: 'Milestones',
      subtitle: 'Like 1 Cr Net Worth',
      description: 'Set ambitious targets like 1 crore net worth — and let us help you map the journey.',
      color: '#EF476F',
    },
  ];
  
  const CarouselSlider = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const renderItem = ({ item }) => (
      <View style={styles.insightBox}>
        <View style={styles.insightLeft}>
          <Icon name={item.icon} size={30} color={item.color} />
          <Text style={styles.insightTitle}>{item.title}</Text>
          <Text style={styles.insightSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.insightRight}>
          <View style={styles.insightRightMain}>
            <View style={styles.rowBetween}>
              <Text style={styles.muted}>{item.description}</Text>
            </View>
            <View style={styles.bottomborder}></View>
          </View>
        </View>
      </View>
    );
  
    return (
      <View style={styles.mainComponent}>
        <Carousel
          ref={carouselRef}
          data={insightSlides} // Use your actual data array here
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width * 0.9}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          onSnapToItem={(index) => setActiveIndex(index)}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={{ overflow: 'visible' }}
        />
      </View>
    );
  };
  

const styles = StyleSheet.create({
    mainComponent: {
      marginTop: 20,
    },
    insightBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    insightLeft: {
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    insightRight: {
      width: '60%',
    },
    insightRightMain: {
      flex: 1,
      justifyContent: 'center',
    },
    insightTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },
    insightSubtitle: {
      fontSize: 13,
      color: '#777',
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
    },
    bottomborder: {
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
      marginVertical: 4,
    },
    muted: {
      color: '#888',
    },
    blackText: {
      color: '#000',
      fontWeight: '600',
    },
    expense: {
      color: '#e74c3c',
    },
  });
  
export default CarouselSlider;