// import React, { useState } from "react";
// import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { Video } from "expo-av";
// import { COLORS } from '../consts/colors';
// import { FontAwesome5 } from '@expo/vector-icons';

// const VideoPicker = ({ navigation }) => {
//   const [video, setVideo] = useState('../assets/FishVideo.mp4');
//   const [imageInfo, setImageInfo] = useState({
//     species: "Salmon",
//     disease: "None"
//   });
//   const openCameraLib = async () => {
//     const pickerResult = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
//     handlePickerResult(pickerResult);
//   };

//   const openLib = async () => {
//     const pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
//     handlePickerResult(pickerResult);
//   };

//   const handlePickerResult = (result) => {
//     if (!result.cancelled) {
//       setVideo(result.uri);
//     }
//   };

//   const removeVideo = () => {
//     setVideo(null);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
//       <ScrollView>
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


//         <View style={styles.container}>
//           <View style={styles.innerContainer}>
//             <View style={styles.mediaContainer}>
//               {video && (
//                 <Video
//                   source={{ uri: video }}
//                   style={styles.media}
//                   useNativeControls
//                   resizeMode="contain"
//                 />
//               )}
//               {video && (
//                 <TouchableOpacity style={styles.removeButton} onPress={removeVideo}>
//                   <FontAwesome5 name="times-circle" size={24} color={COLORS.red} />
//                 </TouchableOpacity>
//               )}
//             </View>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={[styles.btnCam, { backgroundColor: '#7affec' }]} onPress={openCameraLib}>
//                 <FontAwesome5 name="video" size={24} color={COLORS.white} />
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.btnCam, { backgroundColor: '#7affec' }]} onPress={openLib}>
//                 <FontAwesome5 name="video" size={24} color={COLORS.white} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>Species: {imageInfo.species}</Text>
//         <Text style={styles.infoText}>Disease: {imageInfo.disease}</Text>
//       </View>
//         </View>
//       </ScrollView>
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
//   mediaContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   media: {
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



// export default VideoPicker;

import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { COLORS } from '../consts/colors';
import { FontAwesome5 } from '@expo/vector-icons';

const VideoPicker = ({ navigation }) => {
  const [videoUri, setVideoUri] = useState(null);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
    handlePickerResult(result);
  };

  const openLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
    handlePickerResult(result);
  };

  const handlePickerResult = (result) => {
    if (!result.cancelled) {
      setVideoUri(result.uri);
    }
  };

  const removeVideo = () => {
    setVideoUri(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.mediaContainer}>
              {videoUri && (
                <Video
                  source={{ uri: videoUri }}
                  style={styles.media}
                  useNativeControls
                  resizeMode="contain"
                />
              )}
              {videoUri && (
                <TouchableOpacity style={styles.removeButton} onPress={removeVideo}>
                  <FontAwesome5 name="times-circle" size={24} color={COLORS.red} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#7affec' }]} onPress={openCamera}>
                <FontAwesome5 name="video" size={24} color={COLORS.white} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#7affec' }]} onPress={openLibrary}>
                <FontAwesome5 name="video" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>
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
    paddingTop: 50,
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  mediaContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  media: {
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
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
});

export default VideoPicker;
