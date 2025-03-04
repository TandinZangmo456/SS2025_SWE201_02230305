import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const countryCodes = [
  { name: 'Indonesia', code: '+62', flag: 'https://flagcdn.com/w40/id.png' },
  { name: 'Vietnam', code: '+84', flag: 'https://flagcdn.com/w40/vn.png' },
  { name: 'Singapore', code: '+65', flag: 'https://flagcdn.com/w40/sg.png' },
  { name: 'Afghanistan', code: '+93', flag: 'https://flagcdn.com/w40/af.png' },
  { name: 'Albania', code: '+355', flag: 'https://flagcdn.com/w40/al.png' },
  { name: 'Algeria', code: '+213', flag: 'https://flagcdn.com/w40/dz.png' },
];

const Signup = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCountryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[2]); // Default to Singapore

  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
    setCountryCodeModalVisible(false);
  };

  const handleContinue = () => {
    router.push('../verification-method');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.languageButton}>
        <Text style={styles.languageText}>🌐 English</Text>
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Welcome to Gojek!</Text>
      <Text style={styles.subtitle}>Enter or create an account in a few easy steps.</Text>

      <Text style={styles.label}>Phone number*</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.countryCodeContainer} onPress={() => setCountryCodeModalVisible(true)}>
          <Image source={{ uri: selectedCountry.flag }} style={styles.flagIcon} />
          <Text style={styles.countryCode}>{selectedCountry.code}</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="Enter your phone number"
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        I agree to Gojek’s <Text style={styles.link}>Terms of Service</Text> & <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.issueButton}>
        <Text style={styles.issueText}>Issue with number?</Text>
      </TouchableOpacity>

      <Text style={styles.fromText}>from</Text>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gojek_logo_2019.svg' }} style={styles.logo} />

      {/* Country Code Modal */}
      <Modal visible={isCountryCodeModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country Code</Text>
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.countryItem} onPress={() => handleCountrySelect(item)}>
                  <Image source={{ uri: item.flag }} style={styles.flagIcon} />
                  <Text style={styles.countryName}>{item.name}</Text>
                  <Text style={styles.countryCode}>{item.code}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setCountryCodeModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  languageButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  languageText: {
    fontSize: 14,
    color: '#666',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    height: 50,
    marginVertical: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '30%',
    height: '100%',
    justifyContent: 'center',
  },
  flagIcon: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
  },
  separator: {
    width: 1,
    height: '80%',
    backgroundColor: '#ccc',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  continueButton: {
    backgroundColor: '#008000',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#008000',
    fontWeight: 'bold',
  },
  issueButton: {
    marginTop: 10,
  },
  issueText: {
    color: '#008000',
    fontSize: 14,
  },
  fromText: {
    fontSize: 12,
    color: '#666',
    marginTop: 20,
  },
  logo: {
    width: 80,
    height: 20,
    marginTop: 5,
    resizeMode: 'contain',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  countryName: {
    flex: 1,
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  closeText: {
    fontSize: 16,
  },
});

export default Signup;
