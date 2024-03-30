import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from './consts/colors'; // Import the COLORS object from your colors file

const OpenCamera = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState(
    "https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/"
  );

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

  return (
    <View style={styles.container}>
      <View>
        {imgUrl && (
          <Image
            resizeMode="contain"
            style={styles.img}
            source={{ uri: imgUrl }}
          />
        )}
        <TouchableOpacity style={[styles.btnCam, {     backgroundColor: '#7affec' }]} onPress={openCameraLib}>
          <Text style={[styles.textBtn, { color: COLORS.white }]}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnCam, {     backgroundColor: '#7affec'  }]} onPress={openLib}>
          <Text style={[styles.textBtn, { color: COLORS.white }]}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
};

export default OpenCamera;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3557',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 200,
    height: 300,
    alignSelf: "center",
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d9dde3',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#d9dde3',
    marginBottom: 30,
    textAlign: 'center',
  },
  btnCam: {
    backgroundColor: '#7affec',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  textBtn: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
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
