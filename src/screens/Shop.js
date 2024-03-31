import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 for call icon
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons for direction icon

// Custom component for rendering star ratings

const StarRating = ({ rating }) => {
  const stars = [];
  const maxRating = 5; // Maximum rating
  const integerPart = Math.floor(rating);
  const decimalPart = rating - integerPart;
  for (let i = 0; i < integerPart; i++) {
    stars.push(<FontAwesome5 key={i} name="star" size={14} color="yellow" />);
  }
  if (decimalPart > 0) {
    stars.push(
      <FontAwesome5
        key={integerPart}
        name="star-half-alt"
        size={14}
        color="yellow"
      />
    );
  }
  for (let i = integerPart + 1; i < maxRating; i++) {
    stars.push(<FontAwesome5 key={i} name="star" size={14} color="gray" />);
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Aquarium Name 1",
      image: require("../assets/shop1.jpg"),
      address: "123 Aquarium Street, City, Country",
      phoneNumber: "123-456-7890",
      rating: 4.5,
      isOpen: true,
    },
    {
      id: 2,
      name: "Aquarium Name 1",
      image: require("../assets/shop1.jpg"),
      address: "123 Aquarium Street, City, Country",
      phoneNumber: "123-456-7890",
      rating: 2,
      isOpen: true,
    },
    {
      id: 3,
      name: "Aquarium Name 1",
      image: require("../assets/shop1.jpg"),
      address: "123 Aquarium Street, City, Country",
      phoneNumber: "123-456-7890",
      rating: 3,
      isOpen: true,
    },
    {
      id: 4,
      name: "Aquarium Name 1",
      image: require("../assets/shop1.jpg"),
      address: "123 Aquarium Street, City, Country",
      phoneNumber: "123-456-7890",
      rating: 4,
      isOpen: true,
    },
    // Other search results...
  ]);

  const handleSearch = () => {
    setSearchResults([...searchResults]);
  };

  const handleCall = (phoneNumber) => {
    // Implement call functionality here
    // You can use Linking from react-native to initiate a phone call
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleDirections = (address) => {
    // Implement directions functionality here
    // You can use Linking from react-native to open Google Maps with the specified address
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter location or name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <ScrollView style={styles.scrollView}>
        {searchResults.length > 0 ? (
          <View style={styles.resultsContainer}>
            {searchResults.map((aquarium) => (
              <View key={aquarium.id} style={styles.shopCard}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={aquarium.image}
                    style={[styles.shopImage, { flex: 0.6 }]}
                  />
                  <Text
                    style={[
                      styles.shopName,
                      {
                        flex: 0.4,
                        textAlign: "center",
                        color: "blue",
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    {aquarium.name}
                  </Text>
                </View>
                <Text style={styles.shopInfo}>{aquarium.address}</Text>
                <Text style={styles.shopInfo}>
                  <Text style={styles.shopInfo}>Phone:</Text>

                  <Text>{aquarium.phoneNumber}</Text>
                  <FontAwesome5
                    name="phone"
                    size={14}
                    color="blue"
                    onPress={() => handleCall(aquarium.phoneNumber)}
                    style={{ marginLeft: 10 }}
                  />
                </Text>
                <View style={styles.shopInfoContainer}>
                  <Text style={styles.shopInfo}>
                    Status: {aquarium.isOpen ? "Open" : "Closed"}
                  </Text>
                  <View style={styles.iconContainer}>
                    <FontAwesome5
                      name="directions"
                      size={14}
                      color="blue"
                      onPress={() => handleDirections(aquarium.address)}
                      style={{ marginRight: 10 }}
                    />
                    <FontAwesome5
                      name="share"
                      size={14}
                      color="blue"
                      onPress={() => handleShare(aquarium)}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text>No results found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff", // Light blue background color
  },
  input: {
    height: 40,
    borderColor: "blue",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  resultsContainer: {
    paddingBottom: 20, // Add some padding to the bottom to ensure content isn't covered by the tab bar (if any)
  },
  shopCard: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff", // White background color for each shop card
    borderRadius: 10,
    elevation: 3, // Add elevation for shadow effect
  },
  shopImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  shopName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  shopInfo: {
    marginBottom: 3,
  },
  shopInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
  },
});

export default Shop;

// import React, { useState } from "react";
// import { View, TextInput, Button, Text, Image, StyleSheet, ScrollView } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 for call icon
// import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons for direction icon

// const Shop = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([
//     {
//       id: 1,
//       name: "Aquarium Name 1",
//       image: require("../assets/shop1.jpg"),
//       address: "123 Aquarium Street, City, Country",
//       phoneNumber: "123-456-7890",
//       ratings: 4.5,
//       isOpen: true,
//     },
//     {
//         id: 2,
//         name: "Aquarium Name 1",
//         image: require("../assets/shop1.jpg"),
//         address: "123 Aquarium Street, City, Country",
//         phoneNumber: "123-456-7890",
//         ratings: 4.5,
//         isOpen: true,
//       },   {
//         id: 3,
//         name: "Aquarium Name 1",
//         image: require("../assets/shop1.jpg"),
//         address: "123 Aquarium Street, City, Country",
//         phoneNumber: "123-456-7890",
//         ratings: 4.5,
//         isOpen: true,
//       },   {
//         id: 4,
//         name: "Aquarium Name 1",
//         image: require("../assets/shop1.jpg"),
//         address: "123 Aquarium Street, City, Country",
//         phoneNumber: "123-456-7890",
//         ratings: 4.5,
//         isOpen: true,
//       },
//   ]);

//   const handleSearch = () => {
//     setSearchResults([...searchResults]);
//   };

//   const handleCall = (phoneNumber) => {
//     // Implement call functionality here
//     // You can use Linking from react-native to initiate a phone call
//     Linking.openURL(`tel:${phoneNumber}`);
//   };

//   const handleDirections = (address) => {
//     // Implement directions functionality here
//     // You can use Linking from react-native to open Google Maps with the specified address
//     Linking.openURL(
//       `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//         address
//       )}`
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter location or name"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />
//       <Button title="Search" onPress={handleSearch} />
//       <ScrollView style={styles.scrollView}>
//         {searchResults.length > 0 ? (
//           <View style={styles.resultsContainer}>
//             {searchResults.map((aquarium) => (
//               <View key={aquarium.id} style={styles.shopCard}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <Image
//                     source={aquarium.image}
//                     style={[styles.shopImage, { flex: 0.6 }]}
//                   />
//                   <Text style={[styles.shopName, { flex: 0.4, textAlign: 'center', color: 'blue', fontWeight: 'bold' }]}>{aquarium.name}</Text>
//                 </View>
//                 <Text style={styles.shopInfo}>{aquarium.address}</Text>
//                 <Text style={styles.shopInfo}>
//                   Phone: {aquarium.phoneNumber}
//                   <FontAwesome5
//                     name="phone"
//                     size={14}
//                     color="blue"
//                     onPress={() => handleCall(aquarium.phoneNumber)}
//                     style={{ marginLeft: 15 }}
//                   />
//                 </Text>
//                 <Text style={styles.shopInfo}>Ratings: {aquarium.ratings}</Text>
//                 <Text style={styles.shopInfo}>
//                   Status: {aquarium.isOpen ? "Open" : "Closed"}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         ) : (
//           <Text>No results found</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f0f8ff", // Light blue background color
//   },
//   input: {
//     height: 40,
//     borderColor: "blue",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   scrollView: {
//     flex: 1,
//     marginTop: 10,
//   },
//   resultsContainer: {
//     paddingBottom: 20, // Add some padding to the bottom to ensure content isn't covered by the tab bar (if any)
//   },
//   shopCard: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: "#fff", // White background color for each shop card
//     borderRadius: 10,
//     elevation: 3, // Add elevation for shadow effect
//   },
//   shopImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   shopName: {
//     fontWeight: "bold",
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   shopInfo: {
//     marginBottom: 3,
//   },
// });

// export default Shop;
