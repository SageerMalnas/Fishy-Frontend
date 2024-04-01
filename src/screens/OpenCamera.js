import React, { useState } from "react";
import {   View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from '../consts/colors'; // Import the COLORS object from your colors file
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 from expo vector icons

const OpenCamera = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState(
    "https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/"
  );
  const [imageInfo, setImageInfo] = useState({
    species: "Salmon",
    disease: "None"
  });

  const openCameraLib = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImgUrl(result.assets[0].uri);
    }
  };

  const openLib = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    setImgUrl(result.assets[0].uri);
  };

  const removeImage = () => {
    setImgUrl(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
    <ScrollView >
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

    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          {imgUrl && (
            <Image
              resizeMode="contain"
              style={styles.img}
              source={{ uri: imgUrl }}
            />
          )}
          {imgUrl && (
            <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
              <FontAwesome5 name="times-circle" size={24} color={COLORS.red} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.btnCam, { backgroundColor: '#7affec' }]} onPress={openCameraLib}>
            <FontAwesome5 name="camera" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnCam, { backgroundColor: '#7affec' }]} onPress={openLib}>
            <FontAwesome5 name="images" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Species: {imageInfo.species}</Text>
        <Text style={styles.infoText}>Disease: {imageInfo.disease}</Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
    paddingTop: 50, // Adjust padding from the top
    height: 800,
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20, // Adjust margin horizontally for center alignment
    marginTop: 20,
  height: 400
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    width: 200,
    height: 300,
    alignSelf: "center",
    borderRadius: 6,
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 1, // Ensure that the cross button appears above the image
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20, // Add margin from the top for button container
  },
  btnCam: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    color: COLORS.black,
  },
});


export default OpenCamera;




// import React, { useState } from "react";
// import { StyleSheet, TouchableOpacity, View, Image, Text, Button } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// const OpenCamera = ({ navigation }) => {
//   const [imgUrl, setImgUrl] = useState(
//     "https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/"
//   );

//   // const openCameraLib = async () => {
//   //     // try {
//   //     //     const result = await ImagePicker.launchCameraAsync();
//   //     //     if (!result.cancelled && result.assets.length > 0) {
//   //     //         setImgUrl(result.assets[0].uri);
//   //     //     }
//   //     // } catch (error) {
//   //     //     console.error('Failed to open camera:', error);
//   //     // }
//   //     const result = await ImagePicker.launchCameraAsync();
//   //     setImgUrl(result.assets[0].uri);

//   // };
//   const openCameraLib = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       alert("Sorry, we need camera permissions to make this work!");
//       return;
//     }

//     const result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled && result.assets && result.assets.length > 0) {
//       setImgUrl(result.assets[0].uri);
//     }
//   };

//   const openLib = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync();
//     setImgUrl(result.assets[0].uri);
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         {imgUrl && (
//           <Image
//             resizeMode="contain"
//             style={styles.img}
//             source={{ uri: imgUrl }}
//           />
//         )}
//         <TouchableOpacity style={styles.btnCam} onPress={openCameraLib}>
//           <Text style={styles.textBtn}>Open Camera</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btnCam} onPress={openLib}>
//           <Text style={styles.textBtn}>Open Gallery</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     </View>
//   );
// };

// export default OpenCamera;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   img: {
//     width: 200,
//     height: 300,
//     alignSelf: "center",
//     borderRadius: 6,
//   },
//   btnCam: {
//     marginTop: 20,
//     backgroundColor: "blue",
//     padding: 10,
//     borderRadius: 6,
//   },
//   textBtn: {
//     color: "#FFFFFF",
//     textAlign: "center",
//   },
// });
