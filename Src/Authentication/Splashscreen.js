import React, { useRef } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const data = [
  {
    title: 'Quality',
    description: 'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
    buttonText: 'Join the movement!',
    image: require('../Assets/Group1.png'),
    backgroundColor: '#5EA25F',
    buttonColor: '#5EA25F',
  },
  {
    title: 'Convenient',
    description: 'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
    buttonText: 'Join the movement!',
    image: require('../Assets/Group.png'),
    backgroundColor: '#D5715B',
    buttonColor: '#D5715B',
  },
  {
    title: 'Local',
    description: 'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time.',
    buttonText: 'Join the movement!',
    image: require('../Assets/Group3.png'),
    backgroundColor: '#F8C569',
    buttonColor: '#F8C569',
  },
];

const Splashscreen = ({ navigation }) => {
  const carouselRef = useRef(null);

  const Navigatelogin = () => {
    navigation.navigate('Login')
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.dotsContainer}>
            <Text style={styles.dots}>• • •</Text>
          </View>
          <TouchableOpacity style={[styles.button, { backgroundColor: item.buttonColor }]}>
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Navigatelogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.99}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: screenWidth * 1,
    height: screenHeight * 0.49,
  },
  textContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#261C12',
    textAlign: 'center',
    marginBottom: 10,
  },
  dotsContainer: {
    marginVertical: 10,
  },
  dots: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#261C12',
    marginTop: 15,
    fontWeight: '500'
  },
});

export default Splashscreen;
