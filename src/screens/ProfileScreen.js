import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    // Handle submitting the form data (e.g., send to server)
    console.log('Form data:', { firstName, lastName, gender, email, phoneNumber, city });
  };

  const handleImageClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImageClick} style={styles.imageContainer}>
        <MaterialCommunityIcons name="account-circle" size={150} color="#1c3559" />
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Upload Photo</Text>
            <Text style={styles.modalSubheading}>Choose your profile photo</Text>
            <TouchableOpacity style={[styles.option, styles.blueButton]} onPress={() => console.log("Take photo")}>
              <Text style={styles.optionText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option, styles.blueButton]} onPress={() => console.log("Choose from library")}>
              <Text style={styles.optionText}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={closeModal}>
              <Text style={styles.optionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.inputWithIcon}>
        <AntDesign name="user" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputWithIcon}>
        <AntDesign name="user" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      {/* <View style={styles.inputWithIcon}>
        <MaterialCommunityIcons name="gender-male-female" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
      </View> */}
      <View style={styles.inputWithIcon}>
        <AntDesign name="mail" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputWithIcon}>
        <AntDesign name="phone" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.inputWithIcon}>
        <AntDesign name="home" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#eff8ff',
  },
  imageContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1c3559',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 320,
    backgroundColor: '#fff',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#1c3559',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    minWidth: 250,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubheading: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#1c3559',
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfilePage;

