import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const insightSlides = [
    {
        icon: 'wallet-outline',
        title: 'Wealth',
        subtitle: 'In Control',
        description: 'From budgeting to building wealth — your complete personal finance guide in one app.',
        color: '#F1FFF3',
      },
      {
        icon: 'calendar-outline',
        title: 'Planning',
        subtitle: 'With Purpose',
        description: 'Track your net worth, optimize investments, and plan for every life milestone.',
        color: '#F1FFF3',
      },
      {
        icon: 'analytics-outline',
        title: 'Insights',
        subtitle: 'That Matter',
        description: 'Visual breakdowns of your expenses, goals, and investment performance — all simplified.',
        color: '#F1FFF3',
      },
      {
        icon: 'shield-checkmark-outline',
        title: 'Security',
        subtitle: 'Smartly Insured',
        description: 'Get clear on life, health, and car insurance needs — secure your future confidently.',
        color: '#F1FFF3',
      },
      {
        icon: 'trending-up-outline',
        title: 'Growth',
        subtitle: 'By Design',
        description: 'Mutual funds, gold, stocks — grow your wealth with data-backed decisions.',
        color: '#F1FFF3',
      },
      {
        icon: 'calculator-outline',
        title: 'Tools',
        subtitle: 'To Decide Better',
        description: 'From SIPs to EMIs — use built-in calculators to crunch numbers on the go.',
        color: '#F1FFF3',
      },
      {
        icon: 'car-outline',
        title: 'Goals',
        subtitle: 'Like a Car or Home',
        description: 'Planning for a car or house? Use our rules to know what’s smart and sustainable.',
        color: '#F1FFF3',
      },
      {
        icon: 'cash-outline',
        title: 'Savings',
        subtitle: 'That Stick',
        description: 'Apply the 50-30-20 rule or couple budgeting strategies to boost your savings game.',
        color: '#F1FFF3',
      },
      {
        icon: 'star-outline',
        title: 'Milestones',
        subtitle: 'Like 1 Cr Net Worth',
        description: 'Set ambitious targets like 1 crore net worth — and let us help you map the journey.',
        color: '#F1FFF3',
      },
];

const SlideCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % insightSlides.length;
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
      setCurrentSlide(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {insightSlides.map((item, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.card}>
              <View style={styles.left}>
                <Icon name={item.icon} size={36} color={item.color} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom:20,
    zIndex:9999,
    height:160
  },
  slide: {
    width: width,
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#00D09E',
    width: width * 0.9,
    height:150,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  left: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: '#F1FFF3',
  },
  right: {
    width: '65%',
    justifyContent: 'center',
    paddingLeft:10
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
     fontFamily: 'NotoSans'
  },
  subtitle: {
    fontSize: 11,
    color: '#777',
     fontFamily: 'NotoSans'
  },
  description: {
    color: '#052224',
    fontSize: 15,
    fontWeight:'700',
     fontFamily: 'NotoSans'
  },
});

export default SlideCarousel;
