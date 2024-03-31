
import React from 'react';
import { Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const FishExperts = [
  { id: 1, name: 'John Doe', expertise: 'Marine Biologist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 2, name: 'Jane Smith', expertise: 'Aquaculture Specialist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 1, name: 'John Doe', expertise: 'Marine Biologist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 2, name: 'Jane Smith', expertise: 'Aquaculture Specialist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 1, name: 'John Doe', expertise: 'Marine Biologist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 2, name: 'Jane Smith', expertise: 'Aquaculture Specialist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 1, name: 'John Doe', expertise: 'Marine Biologist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 2, name: 'Jane Smith', expertise: 'Aquaculture Specialist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 1, name: 'John Doe', expertise: 'Marine Biologist', image: require('../../src/assets/Expert/expert1.jpg') },
  { id: 2, name: 'Jane Smith', expertise: 'Aquaculture Specialist', image: require('../../src/assets/Expert/expert1.jpg') },
];

const ExpertCard = ({ expert, onPress }) => (
  <TouchableOpacity onPress={() => onPress(expert)}>
    <View style={styles.card}>
      <Image source={expert.image} style={styles.image} />
      <Text style={styles.name}>{expert.name}</Text>
      <Text style={styles.expertise}>{expert.expertise}</Text>
    </View>
  </TouchableOpacity>
);

export default function MessagesScreen() {
  const handleCardPress = (expert) => {
    // Implement navigation logic here, e.g., navigate to a new screen or display a modal
    // For now, we'll just log the details of the selected expert
    console.log(expert);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Fish Experts</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {FishExperts.map(expert => (
          <ExpertCard key={expert.id} expert={expert} onPress={handleCardPress} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  headingContainer: {
    paddingTop: 50, // Equal spacing from the top
    paddingBottom: 20, // Equal spacing from the bottom
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
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
    width: windowWidth - 20, // Take full width with some margin
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
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
  },
});
