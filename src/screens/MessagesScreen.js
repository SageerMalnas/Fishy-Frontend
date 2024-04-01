// import React, { useState } from 'react';
// import { Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import { StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const windowWidth = Dimensions.get('window').width;

// const FishExperts = [
//   {
//     id: 1,
//     name: 'John Doe',
//     expertise: 'Marine Biologist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '123-456-7890',
//     rating: 4.5,
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
//     location: 'New York, USA',
//     experience: '8 years'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     expertise: 'Aquaculture Specialist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '987-654-3210',
//     rating: 4.8,
//     details: 'Sed eget metus vehicula, convallis metus ut, varius metus. Fusce id fringilla est. Nulla sollicitudin sapien a risus fermentum, a pulvinar ipsum feugiat. Proin nec dapibus lectus.',
//     location: 'Los Angeles, USA',
//     experience: '10 years'
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     expertise: 'Marine Biologist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '123-456-7890',
//     rating: 4.5,
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
//     location: 'New York, USA',
//     experience: '8 years'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     expertise: 'Aquaculture Specialist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '987-654-3210',
//     rating: 4.8,
//     details: 'Sed eget metus vehicula, convallis metus ut, varius metus. Fusce id fringilla est. Nulla sollicitudin sapien a risus fermentum, a pulvinar ipsum feugiat. Proin nec dapibus lectus.',
//     location: 'Los Angeles, USA',
//     experience: '10 years'
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     expertise: 'Marine Biologist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '123-456-7890',
//     rating: 4.5,
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
//     location: 'New York, USA',
//     experience: '8 years'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     expertise: 'Aquaculture Specialist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '987-654-3210',
//     rating: 4.8,
//     details: 'Sed eget metus vehicula, convallis metus ut, varius metus. Fusce id fringilla est. Nulla sollicitudin sapien a risus fermentum, a pulvinar ipsum feugiat. Proin nec dapibus lectus.',
//     location: 'Los Angeles, USA',
//     experience: '10 years'
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     expertise: 'Marine Biologist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '123-456-7890',
//     rating: 4.5,
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
//     location: 'New York, USA',
//     experience: '8 years'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     expertise: 'Aquaculture Specialist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '987-654-3210',
//     rating: 4.8,
//     details: 'Sed eget metus vehicula, convallis metus ut, varius metus. Fusce id fringilla est. Nulla sollicitudin sapien a risus fermentum, a pulvinar ipsum feugiat. Proin nec dapibus lectus.',
//     location: 'Los Angeles, USA',
//     experience: '10 years'
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     expertise: 'Marine Biologist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '123-456-7890',
//     rating: 4.5,
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
//     location: 'New York, USA',
//     experience: '8 years'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     expertise: 'Aquaculture Specialist',
//     image: require('../../src/assets/Expert/expert1.jpg'),
//     phone: '987-654-3210',
//     rating: 4.8,
//     details: 'Sed eget metus vehicula, convallis metus ut, varius metus. Fusce id fringilla est. Nulla sollicitudin sapien a risus fermentum, a pulvinar ipsum feugiat. Proin nec dapibus lectus.',
//     location: 'Los Angeles, USA',
//     experience: '10 years'
//   },
// ];

// const RatingStars = ({ rating }) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <MaterialCommunityIcons
//         key={i}
//         name={i <= rating ? 'star' : 'star-outline'}
//         size={24}
//         color="#FFD700"
//       />
//     );
//   }
//   return <View style={styles.ratingContainer}>{stars}</View>;
// };

// const ExpertCard = ({ expert, onPress }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <TouchableOpacity onPress={() => onPress(expert)}>
//       <View style={styles.card}>
//         <Image source={expert.image} style={styles.image} />
//         <Text style={styles.name}>{expert.name}</Text>
//         <Text style={styles.expertise}>{expert.expertise}</Text>
//         <Text style={styles.location}>Location: {expert.location}</Text>
//         <Text style={styles.experience}>Years of Experience: {expert.experience}</Text>
//         {expanded ? (
//           <>
//             <Text style={styles.details}>{expert.details}</Text>
//             <TouchableOpacity onPress={() => setExpanded(false)}>
//               <Text style={styles.readLess}>Read Less</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <TouchableOpacity onPress={() => setExpanded(true)}>
//             <Text style={styles.readMore}>Read More</Text>
//           </TouchableOpacity>
//         )}
//         <View style={styles.ratingContainer}>
//           <RatingStars rating={expert.rating} />
//           <Text style={styles.ratingText}>{expert.rating.toFixed(1)}</Text>
//         </View>
//         <Text style={styles.phone}>Phone: {expert.phone}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default function MessagesScreen() {
//   const handleCardPress = (expert) => {
//     // Implement navigation logic here
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headingContainer}>
//         <Text style={styles.heading}>Fish Experts</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {FishExperts.map(expert => (
//           <ExpertCard key={expert.id} expert={expert} onPress={handleCardPress} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingHorizontal: 10,
//   },
//   headingContainer: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center', // Add valid value here
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     width: windowWidth - 40,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//   },
//   expertise: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 5,
//   },
//   location: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   experience: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   details: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 10,
//   },
//   readMore: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//     marginBottom: 10,
//   },
//   readLess: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingText: {
//     marginLeft: 5,
//     fontSize: 16,
//     color: '#666',
//   },
//   phone: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const FishExperts = [
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Marine Biologist',
    image: require('../../src/assets/Expert/expert1.jpg'),
    phone: '123-456-7890',
    rating: 4.5,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'New York, USA',
    experience: '8 years'
  },
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Marine Biologist',
    image: require('../../src/assets/Expert/expert1.jpg'),
    phone: '123-456-7890',
    rating: 4.5,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'New York, USA',
    experience: '8 years'
  },
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Marine Biologist',
    image: require('../../src/assets/Expert/expert1.jpg'),
    phone: '123-456-7890',
    rating: 4.5,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'New York, USA',
    experience: '8 years'
  },
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Marine Biologist',
    image: require('../../src/assets/Expert/expert1.jpg'),
    phone: '123-456-7890',
    rating: 4.5,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada hendrerit diam nec lobortis. Curabitur et massa nec mauris vehicula lacinia nec id justo. Integer eu est ac felis tempor vehicula. Proin aliquam arcu eget justo malesuada lobortis. Quisque rhoncus nulla in efficitur consectetur.',
    location: 'New York, USA',
    experience: '8 years'
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

const ExpertCard = ({ expert, onPress }) => {
  const [expanded, setExpanded] = useState(false);

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
            <Text style={styles.location}>Location: {expert.location}</Text>
            <Text style={styles.experience}>Experience: {expert.experience}</Text>
            {expanded && (
              <Text style={styles.details}>{expert.details}</Text>
            )}
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <RatingStars rating={expert.rating} />
          <Text style={styles.ratingText}>{expert.rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.phone}>Phone: {expert.phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MessagesScreen() {
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
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
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
});

// export default styles;
