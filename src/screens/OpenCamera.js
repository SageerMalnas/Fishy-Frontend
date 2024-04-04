// import React, { useState } from "react";
// import {   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,Image } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { COLORS } from '../consts/colors'; // Import the COLORS object from your colors file
// import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 from expo vector icons

// const OpenCamera = ({ navigation }) => {
//   const [imgUrl, setImgUrl] = useState(
//     "https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/"
//   );
//   const [imageInfo, setImageInfo] = useState({
//     species: "Salmon",
//     disease: "None"
//   });

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

//   const removeImage = () => {
//     setImgUrl(null);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
//     <ScrollView >
//       <View
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

//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         <View style={styles.imageContainer}>
//           {imgUrl && (
//             <Image
//               resizeMode="contain"
//               style={styles.img}
//               source={{ uri: imgUrl }}
//             />
//           )}
//           {imgUrl && (
//             <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
//               <FontAwesome5 name="times-circle" size={24} color={COLORS.red} />
//             </TouchableOpacity>
//           )}
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.btnCam, { backgroundColor: '#7affec' }]} onPress={openCameraLib}>
//             <FontAwesome5 name="camera" size={24} color={COLORS.white} />
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.btnCam, { backgroundColor: '#7affec' }]} onPress={openLib}>
//             <FontAwesome5 name="images" size={24} color={COLORS.white} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>Species: {imageInfo.species}</Text>
//         <Text style={styles.infoText}>Disease: {imageInfo.disease}</Text>
//       </View>
//     </View>
//     </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f8ff',
//     padding: 20,
//     paddingTop: 50, // Adjust padding from the top
//     height: 800,
//   },
//   innerContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginHorizontal: 20, // Adjust margin horizontally for center alignment
//     marginTop: 20,
//   height: 400
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   img: {
//     width: 200,
//     height: 300,
//     alignSelf: "center",
//     borderRadius: 6,
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: 'transparent',
//     zIndex: 1, // Ensure that the cross button appears above the image
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20, // Add margin from the top for button container
//   },
//   btnCam: {
//     padding: 10,
//     margin: 10,
//     borderRadius: 8,
//   },
//   infoContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   infoText: {
//     fontSize: 18,
//     color: COLORS.black,
//   },
// });


// export default OpenCamera;
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";// Import the COLORS object from your colors file
import FormData from "form-data";
import { COLORS } from '../consts/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { firebase } from '../../config';

const OpenCamera = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [imageInfo, setImageInfo] = useState({
    species: "Unknown",
    disease: "Unknown",
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
      detectImage(result.assets[0].uri);
    }
  };

  const openLib = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImgUrl(result.assets[0].uri);
      detectImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImgUrl(null);
    setImageInfo({
      species: "Lets find out",
      disease: "Lets find out",
    });
  };

  const detectImage = async (uri) => {
    // Create FormData object
    const formData = new FormData();
    formData.append("image", {
      uri,
      type: "image/jpeg",
      name: "image.jpg",
    });

    try {
      const response = await fetch("http://10.10.6.138:5000/process_image", {
        // Modify the above API according to your expo IP
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.json();
      setImageInfo({
        species: data.species,
        disease: data.disease,
      });
    } catch (error) {
      console.error("Error detecting image:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
      <ScrollView>
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
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={removeImage}
                >
                  <FontAwesome5
                    name="times-circle"
                    size={24}
                    color={COLORS.red}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.btnCam, { backgroundColor: "#7affec" }]}
                onPress={openCameraLib}
              >
                <FontAwesome5
                  name="camera"
                  size={24}
                  color={COLORS.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnCam, { backgroundColor: "#7affec" }]}
                onPress={openLib}
              >
                <FontAwesome5 name="images" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Species: {imageInfo.species}
            </Text>
            <Text style={styles.infoText}>
              Disease Status: {imageInfo.disease}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
    paddingTop: 50,
    height: 800,
  },
  innerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20, // Adjust margin horizontally for center alignment
    marginTop: 20,
    height: 400,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  img: {
    width: 200,
    height: 300,
    alignSelf: "center",
    borderRadius: 6,
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
    zIndex: 1, // Ensure that the cross button appears above the image
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20, // Add margin from the top for button container
  },
  btnCam: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    color: COLORS.black,
  },
});

export default OpenCamera;





// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { COLORS } from "../consts/colors"; // Import the COLORS object from your colors file
// import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 from expo vector icons
// import FormData from "form-data"; // Install 'form-data' library using `expo install form-data`

// const OpenCamera = ({ navigation }) => {
//   const [imgUrl, setImgUrl] = useState(null);
//   const [imageInfo, setImageInfo] = useState({
//     species: "Species:",
//     disease: "Disease:",
//   });
//   const [apiResponse, setApiResponse] = useState(null); // State to store API response

//   const openCameraLib = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       alert("Sorry, we need camera permissions to make this work!");
//       return;
//     }

//     const result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled) {
//       setImgUrl(result.assets[0].uri);
//       uploadImage(result.assets[0].uri, result.assets[0].fileName, result.assets[0].type); // Upload image on selection
//     }
//   };

//   const openLib = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync();
//     if (!result.cancelled) {
//       setImgUrl(result.assets[0].uri);
//       uploadImage(result.assets[0].uri, result.assets[0].fileName, result.assets[0].type); // Upload image on selection
//     }
//   };

//   const removeImage = () => {
//     setImgUrl(null);
//     setImageInfo({ species: "Species:", disease: "Disease:" }); // Reset info
//     setApiResponse(null);
//   };

//   const uploadImage = async (imagePath, fileName, type) => {
//     if (!imagePath) {
//       alert("Please select an image first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", {
//       uri: imagePath,
//       type: type, // Adjust content type if needed
//       name: fileName, // Adjust filename if needed
//     });

//     try {
//       const response = await fetch("http://192.168.119.177:5000/process_image", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       console.log("API response:", data); // Log the API response for debugging

//       if (data.species && data.disease) {
//         setImageInfo({ species: `Species: ${data.species}`, disease: `Disease: ${data.disease}` });
//         setApiResponse("Image processed successfully!");
//       } else {
//         setApiResponse("Error processing image. Please try again.");
//       }
//     } catch (error) {
//       // console.error("Error uploading image:", error);
//       setApiResponse("Error uploading image. Please try again.");
//     }
//   };


  
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
//       <ScrollView>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginBottom: 20,
//           }}
//         >
//           <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>
//             Hello Rutuja
//           </Text>
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <ImageBackground
//               source={require("../assets/images/user-profile.jpg")}
//               style={{ width: 45, height: 45 }}
//               imageStyle={{ borderRadius: 25 }}
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.container}>
//           <View style={styles.innerContainer}>
//             <View style={styles.imageContainer}>
//               {/* No image display needed for testing */}
//             </View>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={[styles.btnCam, { backgroundColor: "#7affec" }]} onPress={openCameraLib}>
//                 <FontAwesome5 name="camera" size={24} color={COLORS.white} />
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.btnCam, { backgroundColor: "#7affec" }]} onPress={openLib}>
//                 <FontAwesome5 name="images" size={24} color={COLORS.white} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoText}>{apiResponse}</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#f0f8ff',
//       padding: 20,
//       paddingTop: 50, // Adjust padding from the top
//       height: 800,
//     },
//     innerContainer: {
//       backgroundColor: '#fff',
//       padding: 20,
//       borderRadius: 10,
//       alignItems: 'center',
//       marginHorizontal: 20, // Adjust margin horizontally for center alignment
//       marginTop: 20,
//     height: 400
//     },
//     imageContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       position: 'relative',
//     },
//     img: {
//       width: 200,
//       height: 300,
//       alignSelf: "center",
//       borderRadius: 6,
//     },
//     removeButton: {
//       position: 'absolute',
//       top: 10,
//       right: 10,
//       backgroundColor: 'transparent',
//       zIndex: 1, // Ensure that the cross button appears above the image
//     },
//     buttonContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginTop: 20, // Add margin from the top for button container
//     },
//     btnCam: {
//       padding: 10,
//       margin: 10,
//       borderRadius: 8,
//     },
//     infoContainer: {
//       alignItems: 'center',
//       marginTop: 20,
//     },
//     infoText: {
//       fontSize: 18,
//       color: COLORS.black,
//     },
//   });
  
  
//   export default OpenCamera;







// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { COLORS } from "../consts/colors"; // Import the COLORS object from your colors file
// import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome5 from expo vector icons

// const OpenCamera = ({ navigation }) => {
//   const [imgUrl, setImgUrl] = useState(null); // No initial image
//   const [imageInfo, setImageInfo] = useState({
//     species: "Salmon",
//     disease: "None",
//   });
//   const [apiResponse, setApiResponse] = useState(null); // State to store API response

//   const openCameraLib = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       alert("Sorry, we need camera permissions to make this work!");
//       return;
//     }

//     const result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled) {
//       // No need to set image URL here for testing
//       triggerApiRequest(); // Trigger API request even without image
//     }
//   };

//   const openLib = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync();
//     if (!result.cancelled) {
//       // No need to set image URL here for testing
//       triggerApiRequest(); // Trigger API request even without image
//     }
//   };

//   const removeImage = () => {
//     setImgUrl(null);
//     setApiResponse(null); // Clear API response when image is removed
//   };

//   const triggerApiRequest = async () => {
//     try {
//       const response = await fetch("http://192.168.119.177:5000/preprocess_image", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Empty body, so JSON is appropriate
//         },
//       });

//       const data = await response.json();
//       console.log("API response:", data); // Log the API response for debugging

//       if (data.message === "successful") {
//         setApiResponse("API connection successful!");
//       } else {
//         setApiResponse("API response: " + data.message); // Handle other responses
//       }
//     } catch (error) {
//       console.error("Error making API request:", error);
//       setApiResponse("Error connecting to API.");
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
//       <ScrollView>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginBottom: 20,
//           }}
//         >
//           <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>
//             Hello Rutuja
//           </Text>
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <ImageBackground
//               source={require("../assets/images/user-profile.jpg")}
//               style={{ width: 45, height: 45 }}
//               imageStyle={{ borderRadius: 25 }}
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.container}>
//           <View style={styles.innerContainer}>
//             <View style={styles.imageContainer}>
//               {/* No image display needed for testing */}
//             </View>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={[styles.btnCam, { backgroundColor: "#7affec" }]} onPress={openCameraLib}>
//                 <FontAwesome5 name="camera" size={24} color={COLORS.white} />
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.btnCam, { backgroundColor: "#7affec" }]} onPress={openLib}>
//                 <FontAwesome5 name="images" size={24} color={COLORS.white} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoText}>{apiResponse}</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#f0f8ff',
//       padding: 20,
//       paddingTop: 50, // Adjust padding from the top
//       height: 800,
//     },
//     innerContainer: {
//       backgroundColor: '#fff',
//       padding: 20,
//       borderRadius: 10,
//       alignItems: 'center',
//       marginHorizontal: 20, // Adjust margin horizontally for center alignment
//       marginTop: 20,
//     height: 400
//     },
//     imageContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       position: 'relative',
//     },
//     img: {
//       width: 200,
//       height: 300,
//       alignSelf: "center",
//       borderRadius: 6,
//     },
//     removeButton: {
//       position: 'absolute',
//       top: 10,
//       right: 10,
//       backgroundColor: 'transparent',
//       zIndex: 1, // Ensure that the cross button appears above the image
//     },
//     buttonContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginTop: 20, // Add margin from the top for button container
//     },
//     btnCam: {
//       padding: 10,
//       margin: 10,
//       borderRadius: 8,
//     },
//     infoContainer: {
//       alignItems: 'center',
//       marginTop: 20,
//     },
//     infoText: {
//       fontSize: 18,
//       color: COLORS.black,
//     },
//   });
  
  
//   export default OpenCamera;
