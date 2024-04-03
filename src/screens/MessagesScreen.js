import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Modal, TextInput, Button, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { Navbar } from './Navbar'; // Assuming Navbar.js is in the same directory


const windowWidth = Dimensions.get('window').width;

const FishExperts = [
  {
    id: 1,
    name: 'Dr. Rajesh Sharma',
    expertise: 'Freshwater Fish Biology',
    image: require('../../src/assets/Expert/expert1.jpg'),
    phone: '+91 9876585462',
    rating: 4.5,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Bangalore, India',
    experience: '15 years'
  },
  {
    id: 1,
    name: 'Dr. Priya Singh',
    expertise: 'Aquaculture Management',
    image: require('../../src/assets/Expert/expert2.jpg'),
    phone: '+91 8765421563',
    rating: 4,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Chennai, India',
    experience: '12 years'
  },
  {
    id: 1,
    name: 'Prof. Amit Patel',
    expertise: 'Marine Ecology',
    image: require('../../src/assets/Expert/expert3.jpg'),
    phone: ' +91 7890198561',
    rating: 4.1,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Mumbai, India',
    experience: '20 years'
  },
  {
    id: 1,
    name: 'Dr. Neha Gupta',
    expertise: ' Fish Pathology',
    image: require('../../src/assets/Expert/expert4.jpg'),
    phone: '+91 98765XXXXX',
    rating: 4.3,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Kolkata, India',
    experience: '8 years'
  },
  {
    id: 1,
    name: 'Dr. Sanjay Kumar',
    expertise: ' Fisheries Economics',
    image: require('../../src/assets/Expert/expert5.jpg'),
    phone: '+91 7548265954',
    rating: 3.9,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Hyderabad, India',
    experience: '10 years'
  },
  {
    id: 1,
    name: 'Dr. Neha Kapoor',
    expertise: ' Fish Nutrition',
    image: require('../../src/assets/Expert/expert7.jpg'),
    phone: '+91 8457965217',
    rating: 3.8,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Jaipur, Rajasthan',
    experience: '9 years'
  },
  {
    id: 1,
    name: 'Dr. Vikram Singh',
    expertise: 'Ornamental Fish Breeding',
    image: require('../../src/assets/Expert/expert6.jpg'),
    phone: '+91 8752257563',
    rating: 4.1,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Bangalore,Karnataka',
    experience: '11 years'
  },
  {
    id: 1,
    name: 'Dr. Nisha Patel',
    expertise: ' Fish Genetics',
    image: require('../../src/assets/Expert/expert9.jpg'),
    phone: ' +91 9992535238',
    rating: 4,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: ' Ahmedabad, Gujarat',
    experience: '9 years'
  },
  {
    id: 1,
    name: 'Dr. Arjun Singhania',
    expertise: 'Ornamental Fish Breeding and Genetics',
    image: require('../../src/assets/Expert/expert8.jpg'),
    phone: '+91 8856889846',
    rating: 3.9,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Kolkata, India',
    experience: '15 years'
  },
  {
    id: 1,
    name: 'Dr. Preeti Mishra',
    expertise: ' Fish Reproduction and Hatchery Management',
    image: require('../../src/assets/Expert/expert10.jpg'),
    phone: '+91 7777265954',
    rating: 4,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'Pune, Maharashtra',
    experience: '11 years'
  },
];

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <MaterialCommunityIcons
        key={i}
        name={i <= rating ? 'star' : 'star-outline'}
        size={24}
        color="#FFD700"
      />
    );
  }
  return <View style={styles.ratingContainer}>{stars}</View>;
};

const ExpertCard = ({ expert, onPress, selectedDate, setSelectedDate }) => {
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  // const [showReadMore, setShowReadMore] = useState(true);

  const toggleReadMore = () => {
    setShowReadMore(!showReadMore);
  };

  const onGetHelp = () => {
    setModalVisible(true);
  };

  const handleBookAppointment = () => {
    console.log('Appointment booked');
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={() => onPress(expert)}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Image source={expert.image} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{expert.name}</Text>
            <Text style={styles.expertise}>{expert.expertise}</Text>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker" size={16} color="#666" />
              <Text style={styles.locationText}>{expert.location}</Text>
            </View>
            <Text style={styles.experience}>Experience: {expert.experience}</Text>
            {expanded && (
              <Text style={styles.details}>{expert.details}</Text>
            )}
             
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.getHelpButton} onPress={() => onGetHelp(expert)}>
            <Text style={styles.getHelpButtonText}>Get Help</Text>
          </TouchableOpacity>

          {/* <Text style={styles.phone}>Phone: {expert.phone}</Text> */}
          <View style={styles.ratingContainer}>
            <RatingStars rating={expert.rating} />
            <Text style={styles.ratingText}>{expert.rating.toFixed(1)}</Text>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={[styles.input, isNameFocused ? styles.inputFocused : null]}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
              <TextInput
                style={[styles.input, isNameFocused ? styles.inputFocused : null]}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    styles.dateInput,
                    datePickerVisible && styles.dateInputSelected,
                    !selectedDate && styles.placeholderText]}
                  placeholder="Select Date"
                  placeholderTextColor="#666"
                  value={selectedDate ? selectedDate : 'YYYY-MM-DD'}
                  editable={false}
                />
                <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                  <MaterialCommunityIcons name="calendar" size={24} color="#1C3559" />
                </TouchableOpacity>
              </View>
              {datePickerVisible && (
                <Calendar
                  onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    setDatePickerVisible(false);
                  }}
                  markedDates={{
                    [selectedDate]: { selected: true, disableTouchEvent: true, selectedColor: '#1c3559', selectedTextColor: 'white' }
                  }}
                />
              )}
              <View style={styles.buttonContainer}>
                <Button title="Book Appointment" onPress={handleBookAppointment} color="#1c3559" />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Close"
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.closeButton}
                  color="#1c3559"
                // titleStyle={styles.buttonTitle}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity >
  );
};

export default function MessagesScreen() {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleCardPress = (expert) => {
    // Implement navigation logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Fish Experts</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {FishExperts.map(expert => (
          <ExpertCard
            key={expert.id}
            expert={expert}
            onPress={handleCardPress}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff8ff',
    paddingHorizontal: 10,
  },
  headingContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: windowWidth - 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  expertise: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  experience: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666',
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
  getHelpButton: {
    backgroundColor: '#1c3559',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  getHelpButtonText: {
    color: 'white',
    fontSize: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: '#eff8ff',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#1C3559',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 250,
    height: 40,
  },
  inputFocused: {
    borderColor: '#1C3559',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#1C3559',
    borderRadius: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Adjust this value as needed
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 10,
    width: 250,
    paddingHorizontal: 10,
  },
  dateInput: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    zIndex: 1,
    color: "gray",
  },
  dateInputSelected: {
    color: '#000',
  },
});
// export default MessagesScreen; 