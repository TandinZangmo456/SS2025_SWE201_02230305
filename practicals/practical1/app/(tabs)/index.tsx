import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Slide text data (image remains constant)
const slides = [
  {
    id: '1',
    text: 'Welcome to Gojek!',
    description: "We're your go-to app for hassle-free commutes.",
  },
  {
    id: '2',
    text: 'Get going with us',
    description: 'Use GoCar to get across town – from anywhere, at any time.',
  },
  {
    id: '3',
    text: 'Rides for all',
    description: 'Up to three stops with every trip – perfect for travel with friends and family.',
  },
];

export default function WelcomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next text slide when tapping
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar with Logo and Language Selection */}
      <View style={styles.topBar}>
        <Image source={require('../../assets/images/gojek-logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>🌍 English</Text>
        </TouchableOpacity>
      </View>

      {/* Touchable area to change text */}
      <TouchableOpacity style={styles.fullScreenTouchable} onPress={goToNextSlide}>
        <View style={styles.content}>
          {/* Static Image */}
          <Image source={require('../../assets/images/gojek3.png')} style={styles.image} />

          {/* Changing Text */}
          <Text style={styles.title}>{slides[currentIndex].text}</Text>
          <Text style={styles.subtitle}>{slides[currentIndex].description}</Text>
        </View>
      </TouchableOpacity>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>I'm new, sign me up</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        By logging in or registering, you agree to our{' '}
        <Text style={styles.linkText}>Terms of service</Text> and{' '}
        <Text style={styles.linkText}>Privacy policy</Text>.
      </Text>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  languageButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  fullScreenTouchable: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: height * 0.3, // Matches the given screenshot
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#008000',
  },
  loginButton: {
    backgroundColor: '#008000',
    paddingVertical: 14,
    width: '90%',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    borderWidth: 2,
    borderColor: '#008000',
    paddingVertical: 14,
    width: '90%',
    borderRadius: 25,
    alignItems: 'center',
  },
  signupText: {
    color: '#008000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  linkText: {
    color: '#008000',
    fontWeight: 'bold',
  },
});

