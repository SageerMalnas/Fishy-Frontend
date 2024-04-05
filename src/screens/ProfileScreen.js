import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Modal, Text , Image, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('Max');
  const [lastName, setLastName] = useState('Olson');
  const [email, setEmail] = useState('max@example.com');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [city, setCity] = useState('Nashik');
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(require('../../src/assets/images/user-profile.jpg'));

  const handleSubmit = () => {
    console.log('Form data:', { firstName, lastName, email, phoneNumber, city });
    // Close keyboard
    Keyboard.dismiss();
  };

  const handleImageClick = () => {
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleChangePassword = () => {
    setPasswordModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
        <TouchableOpacity onPress={handleImageClick} style={styles.imageContainer}>
          <ImageBackground
            source={profileImage}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          {/* Modal content */}
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
          <Text style={styles.submitButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleChangePassword}
          style={[styles.changePasswordButton, isPasswordModalVisible ? styles.activeChangePasswordButton : null]}
        >
          <Text style={styles.changePasswordButtonText}>Change Password</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={passwordModalVisible}
          onRequestClose={() => setPasswordModalVisible(false)}
        >
          {/* Modal content */}
        </Modal>
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 100, // added border radius
    overflow: 'hidden', // ensure border radius works properly
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
    justifyContent: 'center',
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  activeChangePasswordButton: {
    color: 'red', 
    fontSize: 20,
  },
  changePasswordButtonText: {
    color: '#1c3559', // Change color to whatever you prefer
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  profileImage: {
    width: 150, // increased width
    height: 150, // increased height
  },
});

export default ProfilePage;
