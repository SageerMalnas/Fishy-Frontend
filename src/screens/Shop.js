// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   ImageBackground
// } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 for call icon
// import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons for direction icon
// import Feather from "react-native-vector-icons/Feather";
// // Custom component for rendering star ratings

// const StarRating = ({ rating }) => {
//   const stars = [];
//   const maxRating = 5; // Maximum rating
//   const integerPart = Math.floor(rating);
//   const decimalPart = rating - integerPart;
//   for (let i = 0; i < integerPart; i++) {
//     stars.push(<FontAwesome5 key={i} name="star" size={14} color="yellow" />);
//   }
//   if (decimalPart > 0) {
//     stars.push(
//       <FontAwesome5
//         key={integerPart}
//         name="star-half-alt"
//         size={14}
//         color="yellow"
//       />
//     );
//   }
//   for (let i = integerPart + 1; i < maxRating; i++) {
//     stars.push(<FontAwesome5 key={i} name="star" size={14} color="gray" />);
//   }

//   return <View style={{ flexDirection: "row" }}>{stars}</View>;
// };

// const Shop = ({ navigation }) => {
//   const [searchText, setSearchText] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const filteredProducts = ProductData.filter(
//     item => item.productName.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const ProductData =([
//     {
//       id: 1,
//       name: "Aquarium Name 1",
//       image: require("../assets/shop1.jpg"),
//       address: "123 Aquarium Street, City, Country",
//       phoneNumber: "123-456-7890",
//       rating: 4.5,
//       isOpen: true,
//     },
//     {
//       id: 2,
//       name: "Aquarium Name 1",
//       image: require("../assets/shop1.jpg"),
//       address: "123 Aquarium Street, City, Country",
//       phoneNumber: "123-456-7890",
//       rating: 2,
//       isOpen: true,
//     },
//     {
//       id: 3,
//       name: "Aquarium Name 1",
//       image: require("../assets/shop1.jpg"),
//       address: "123 Aquarium Street, City, Country",
//       phoneNumber: "123-456-7890",
//       rating: 3,
//       isOpen: true,
//     },
//     {
//       id: 4,
//       name: "Aquarium Name 1",
//       image: require("../assets/shop1.jpg"),
//       address: "123 Aquarium Street, City, Country",
//       phoneNumber: "123-456-7890",
//       rating: 4,
//       isOpen: true,
//     },
//     // Other search results...
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
//        <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           marginBottom: 20,

//         }}
//       >
//         <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>
//           Hello Rutuja
//         </Text>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <ImageBackground
//             source={require("../assets/images/user-profile.jpg")}
//             style={{ width: 45, height: 45 }}
//             imageStyle={{ borderRadius: 25 }}
//           />
//         </TouchableOpacity>
//       </View>

//       <View  style={{
//           flexDirection: "row",
//           borderColor: "#C6C6C6",
//           borderWidth: 1,
//           borderRadius: 8,
//           paddingHorizontal: 10,
//           paddingVertical: 8,
//         }}>
//       <Feather
//           name="search"
//           size={20}
//           color="#C6C6C6"
//           style={{ marginRight: 5 }}
//         />
//         <TextInput
//             placeholder="Search"
//             style={{ flex: 1 }}
//           value={searchText}
//           onChangeText={text => setSearchText(text)}
//         />
//       </View>

//       <ScrollView style={styles.scrollView}>
//         {searchResults.length > 0 ? (
//           <View style={styles.resultsContainer}>
//             {searchResults.map((aquarium) => (
//               <View key={aquarium.id} style={styles.shopCard}>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <Image
//                     source={aquarium.image}
//                     style={[styles.shopImage, { flex: 0.6 }]}
//                   />
//                   <Text
//                     style={[
//                       styles.shopName,
//                       {
//                         flex: 0.4,
//                         textAlign: "center",
//                         color: "blue",
//                         fontWeight: "bold",
//                       },
//                     ]}
//                   >
//                     {aquarium.name}
//                   </Text>
//                 </View>
//                 <Text style={styles.shopInfo}>{aquarium.address}</Text>
//                 <Text style={styles.shopInfo}>
//                   <Text style={styles.shopInfo}>Phone:</Text>

//                   <Text>{aquarium.phoneNumber}</Text>
//                   <FontAwesome5
//                     name="phone"
//                     size={14}
//                     color="blue"
//                     onPress={() => handleCall(aquarium.phoneNumber)}
//                     style={{ marginLeft: 10 }}
//                   />
//                 </Text>
//                 <View style={styles.shopInfoContainer}>
//                   <Text style={styles.shopInfo}>
//                     Status: {aquarium.isOpen ? "Open" : "Closed"}
//                   </Text>
//                   <View style={styles.iconContainer}>
//                     <FontAwesome5
//                       name="directions"
//                       size={14}
//                       color="blue"
//                       onPress={() => handleDirections(aquarium.address)}
//                       style={{ marginRight: 10 }}
//                     />
//                     <FontAwesome5
//                       name="share"
//                       size={14}
//                       color="blue"
//                       onPress={() => handleShare(aquarium)}
//                     />
//                   </View>
//                 </View>
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
//     backgroundColor: "#f0f8ff",
//     paddingTop: 50,
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
//   shopInfoContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   iconContainer: {
//     flexDirection: "row",
//   },
// });

// export default Shop;
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 for call icon
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
// Custom component for rendering star ratings
import { MaterialCommunityIcons } from '@expo/vector-icons';

  
// const StarRating = ({ rating }) => {
//   const stars = [];
//   const maxRating = 5; // Maximum rating
//   const integerPart = Math.floor(rating);
//   const decimalPart = rating - integerPart;
//   for (let i = 0; i < integerPart; i++) {
//     stars.push(<FontAwesome5 key={i} name="star" size={14} color="yellow" />);
//   }
//   if (decimalPart > 0) {
//     stars.push(
//       <FontAwesome5
//         key={integerPart}
//         name="star-half-alt"
//         size={14}
//         color="yellow"
//       />
//     );
//   }
//   for (let i = integerPart + 1; i < maxRating; i++) {
//     stars.push(<FontAwesome5 key={i} name="star" size={14} color="gray" />);
//   }

//   return <View style={{ flexDirection: "row" }}>{stars}</View>;
// };

const StarRating  = ({ rating }) => {
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

const Shop = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const ProductData = [
    {
      id: 1,
      name: "Nil Aquarium ",
      image: require("../assets/shop1.jpg"),
      address:
        "Jaswandi plaza,shop No.5,Mhasrul-Makhamalabad, Link Road, Mhasrul Gaon, Nashik, Maharashtra 422004",
      phoneNumber: "082638 51897",
      rating: 4.8,
      isOpen: true,
    },
    {
      id: 2,
      name: "Fish Point Aquarium ",
      image: require("../assets/shop1.jpg"),
      address:
        "Shop No 2 Stat Bank, near Mahesh Medical cisco, Ganesh Chowk, Nashik",
      phoneNumber: "095618 56363",
      rating: 4.5,
      isOpen: true,
    },
    {
      id: 3,
      name: "Bharat fish Aquarium ",
      image: require("../assets/shop1.jpg"),
      address:
        " Plot No. 8 B Motwani Road, Nashik Rd, opp. Utsav Mangal Karyalaya, Nashik, Maharashtra 422214",
      phoneNumber: "093739 10290",
      rating: 4.1,
      isOpen: true,
    },
    {
      id: 4,
      name: "Aquadunia Nashik",
      image: require("../assets/shop1.jpg"),
      address:
        "Shodhika Niwas, Bhaguji Patil Salunkhe Nagar, near Dakshin Mukhi Hanuman Mandir, Khutawad Nagar, Nashik, Maharashtra 422",
      phoneNumber: "082370 43884",
      rating: 4.6,
      isOpen: true,
    },

    {
      id: 4,
      name: "SS Aquarium and Pet World",
      image: require("../assets/shop1.jpg"),
      address:
        "Shop no. 8, Triveni Darshan Soceity, opp. Samraat Nucleus Building Road, near Dadasaheb Gaikwad Hall, Bhabha Nagar, Mumbai Naka, Dr.Homi Bhabha Nagar, Nashik, Maharashtra 422005",
      phoneNumber: " 095527 86261",
      rating: 4.9,
      isOpen: true,
    },
    {
      id: 4,
      name: "Om Sai Aquarium",
      image: require("../assets/shop1.jpg"),
      address:
        " Meenatai Thakre Market, Savata Nagar, Nashik, Maharashtra 422008",
      phoneNumber: "098503 31780",
      rating: 3.6,
      isOpen: true,
    },
    // Other search results...
  ];

  const filteredProducts = ProductData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
    // No need to do anything here, filtering is already done in filteredProducts
  };

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleDirections = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`
    );
  };

  const handleShare = (product) => {
    // Implement share functionality
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>
          Hello Rutuja
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require("../assets/images/user-profile.jpg")}
            style={{ width: 45, height: 45 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderColor: "#C6C6C6",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          backgroundColor:"white",
        }}
      >
        <Feather
          name="search"
          size={20}
          color="#C6C6C6"
          style={{ marginRight: 5 }}
        />
        <TextInput
          placeholder="Search"
          style={{ flex: 1 }}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {filteredProducts.length > 0 ? (
          <View style={styles.resultsContainer}>
            {filteredProducts.map((aquarium) => (
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
                        color: "#1d3557",
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    {aquarium.name}
                  </Text>
                </View>
                <View style={styles.ratingContainer}>
          <StarRating rating={aquarium.rating} />
          <Text style={styles.ratingText}>{aquarium.rating.toFixed(1)}</Text>
        </View>
        
     

                <Text style={styles.shopInfo}>
                  <Text style={{fontWeight:"bold"}}>Address: </Text>

                  <Text>{aquarium.address}</Text>
                </Text>
                <Text style={styles.shopInfo} >
                  <Text style= {{fontWeight:"bold"}}>Phone: </Text>

                  <Text>{aquarium.phoneNumber}</Text>
                </Text>
                <View style={styles.shopInfoContainer}>
                  <Text style={{fontWeight:"bold"}}>
                    Status: {aquarium.isOpen ? "Open" : "Closed"}
                  </Text>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name="arrow-redo-outline"
                      size={22}
                      onPress={() => handleDirections(aquarium.address)}
                    />
                    <Ionicons
                      name="share-social-outline"
                      size={22}
                      onPress={() => handleShare(aquarium)}
                      style={{ marginLeft: 10 }}
                    />
                    <Ionicons
                      name="call-outline"
                      size={20}
                      onPress={() => handleCall(aquarium.phoneNumber)}
                      style={{ marginLeft: 10 }}
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
    backgroundColor: "#f0f8ff",
    paddingTop: 50,
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
    color: '#1d3557'
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666',
  },
});

export default Shop;
