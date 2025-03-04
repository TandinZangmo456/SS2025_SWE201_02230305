import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import LanguagePopup from '../../components/LanguagePopup';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../assets/images/gojek1.png'),
    title: 'Welcome to Gojek',
    description: 'Get your groceries, food, and packages delivered to your doorstep.',
  },
  {
    id: '2',
    image: require('../../assets/images/gojek2.png'),
    title: 'Get going with us',
    description: 'Use GoCar to get across town – from anywhere, at any time.',
  },
  {
    id: '3',
    image: require('../../assets/images/gojek3.png'),
    title: 'Rides for all',
    description: 'Up to three stops with every trip – perfect for travel with friends and family.',
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [isLanguagePopupVisible, setIsLanguagePopupVisible] = useState(false);
  const router = useRouter(); // Create a router instance

  useEffect(() => {
    if (!showSplash) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 4000); // Ensures every slide gets equal time

      return () => clearInterval(interval);
    }
  }, [showSplash]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Handle navigation to signup screen
  const handleSignUpPress = () => {
    router.push('/signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <TouchableOpacity style={styles.splashContainer} onPress={() => setShowSplash(false)}>
          <Image source={require('../../assets/images/gojek-logo.png')} style={styles.splashLogo} />
          <Text style={styles.splashFooter}>from <Text style={styles.splashBrand}>goto</Text></Text>
        </TouchableOpacity>
      ) : (
        <>
          <View style={styles.topBar}>
            <Image source={require('../../assets/images/gojek-logo.png')} style={styles.logo} />
            <TouchableOpacity style={styles.languageButton} onPress={() => setIsLanguagePopupVisible(true)}>
              <Text style={styles.languageText}>🌍 English</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.fullScreenTouchable} onPress={handleNextSlide}>
            <View style={styles.content}>
              <Image source={slides[currentIndex].image} style={styles.image} />
              <Text style={styles.title}>{slides[currentIndex].title}</Text>
              <Text style={styles.subtitle}>{slides[currentIndex].description}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
            ))}
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>

          {/* Updated Signup Button with navigation */}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
            <Text style={styles.signupText}>I'm new, sign me up</Text>
          </TouchableOpacity>

          {/* Language Popup Modal */}
          <Modal
            transparent
            animationType="slide"
            visible={isLanguagePopupVisible}
            onRequestClose={() => setIsLanguagePopupVisible(false)}
          >
            <LanguagePopup 
              visible={isLanguagePopupVisible} 
              selectedLanguage="English" 
              onSelectLanguage={(language) => console.log(language)} 
              onClose={() => setIsLanguagePopupVisible(false)} 
            />
          </Modal>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  splashFooter: {
    position: 'absolute',
    bottom: 50,
    fontSize: 16,
    color: '#666',
  },
  splashBrand: {
    fontWeight: 'bold',
    color: 'green',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 90,
    resizeMode: 'contain',
  },
  languageButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  languageText: {
    fontSize: 14,
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
    height: height * 0.3,
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
});
