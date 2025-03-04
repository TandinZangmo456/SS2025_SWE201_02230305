import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

interface LanguagePopupProps {
  visible: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}

const LanguagePopup: React.FC<LanguagePopupProps> = ({ visible, onClose, selectedLanguage, onSelectLanguage }) => {
  const [selected, setSelected] = useState(selectedLanguage);
  const languages = ['English', 'Bahasa Indonesia', 'Tiếng Việt'];

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        {/* Floating Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>✖</Text>
        </TouchableOpacity>

        {/* Popup Container */}
        <View style={styles.popupContainer}>
          <Text style={styles.title}>Change language</Text>
          <Text style={styles.subtitle}>Which language do you prefer?</Text>

          {/* Language Selection List */}
          {languages.map((language) => (
            <TouchableOpacity
              key={language}
              style={styles.languageOption}
              onPress={() => setSelected(language)}
            >
              <Text style={styles.languageText}>{language}</Text>
              <View style={[styles.radioOuter, selected === language && styles.radioOuterSelected]}>
                {selected === language && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          ))}

          {/* Continue Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={() => { 
            onSelectLanguage(selected);
            onClose();
          }}>
            <Text style={styles.confirmText}>Continue in {selected}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  closeButton: {
    position: 'absolute',
    top: '57%',
    right: 20,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  closeText: {
    fontSize: 20,
    color: '#555',
  },
  popupContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'left',
    width: '100%',
    marginBottom: 20,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 14,
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: 'green',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
  },
  confirmText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LanguagePopup;
