import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerificationMethod = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verification Method Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default VerificationMethod;
