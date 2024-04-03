import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Modal, Text , Image} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState("../../src/assets/images/user-profile.jpg");

  const handleSubmit = () => {
   
    console.log('Form data:', { firstName, lastName, email, phoneNumber, city });
  };

  const handleImageClick = (imageUrl) => {
    setModalVisible(true);
    setProfileImage(imageUrl); // Assuming you have a state variable for profile image
  };
  


  const closeModal = () => {
    setModalVisible(false);
  };

  const handleChangePassword = () => {
    // Handle changing password here
    console.log('Changing password...');
    setPasswordModalVisible(true); // Open password modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <TouchableOpacity onPress={() => handleImageClick("../../src/assets/images/user-profile.jpg")} style={styles.imageContainer}>
      <Image
          source={{ uri: "../../src/assets/images/user-profile.jpg" }}
          style={styles.profileImage}
        >
          <AntDesign name="camera" size={24} color="#fff" style={styles.cameraIcon} />
        </Image>
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
          placeholder="Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputWithIcon}>
        <AntDesign name="user" size={24} color="#1c3559" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Change Password</Text>
            {/* Input fields for current and new password */}
            <TextInput
              style={styles.input}
              placeholder="Current Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => { }} style={styles.option}>
              <Text style={styles.optionText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPasswordModalVisible(false)} style={styles.option}>
              <Text style={styles.optionText}>Cancel</Text>
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
});

export default ProfilePage;

