import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const MessagesScreen = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('./assets/Expert/expert1.jpg')} // Add your fish expert's avatar image
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>John Doe</Text> {" Replace with expert's name "}
        <Text style={styles.expertise}>Marine Biologist</Text> {" Replace with expert's expertise "}
        <Text style={styles.description}>
          John Doe is an experienced marine biologist with a passion for studying
          marine ecosystems and fish behavior.
        </Text> {" Replace with expert's description "}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  expertise: {
    fontSize: 16,
    color: '#888888',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default MessagesScreen;

// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const FishExpertCard = () => {
//   return (
//     <View style={styles.card}>
//       <Image
//         source={require('./assets/fish_expert_avatar.jpg')} // Add your fish expert's avatar image
//         style={styles.avatar}
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.name}>John Doe</Text> {/* Replace with expert's name */}
//         <Text style={styles.expertise}>Marine Biologist</Text> {/* Replace with expert's expertise */}
//         <Text style={styles.description}>
//           John Doe is an experienced marine biologist with a passion for studying
//           marine ecosystems and fish behavior.
//         </Text> {/* Replace with expert's description */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   textContainer: {
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   expertise: {
//     fontSize: 16,
//     color: '#888888',
//   },
//   description: {
//     marginTop: 5,
//     fontSize: 14,
//   },
// });

// export default FishExpertCard;
