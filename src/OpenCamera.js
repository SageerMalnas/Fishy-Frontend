// import React, { useState } from "react";
// import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

// const OpenCamera = () => {
//     const [imgUrl, setImgUrl] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2cneAM_oJVpSDyLmjeksgu&ust=1711720471482000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKidrOaNl4UDFQAAAAAdAAAAABAE")
//   const openCameraLib = async() => {
//     const result = await launchCamera();

//   };
//   return (
//     <View style={styles.container}>
//       <View>
//         <Image
//           resizeMode="contain"
//           style={styles.img}
//           source={{
//             uri: imgUrl,
//           }}
//         ></Image>

//         <TouchableOpacity style={styles.btnCam} onPress={openCameraLib}>
//           <Text style={styles.textBtn}>Open Camera</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default OpenCamera;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   img: {
//     width: "90px",
//     height: 300,
//     alignSelf: "center",
//     borderRadius: 6,
//   },

//   btnCam:
//   {
//     alignSelf:'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 100,
//     height: 40,
//     borderRadius: 'green',
//   },
//   textBtn:
//   {
//     color:'#000000'
//   }
// });

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

const OpenCamera = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState(
    "https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/"
  );

  // const openCameraLib = async () => {
  //     // try {
  //     //     const result = await ImagePicker.launchCameraAsync();
  //     //     if (!result.cancelled && result.assets.length > 0) {
  //     //         setImgUrl(result.assets[0].uri);
  //     //     }
  //     // } catch (error) {
  //     //     console.error('Failed to open camera:', error);
  //     // }
  //     const result = await ImagePicker.launchCameraAsync();
  //     setImgUrl(result.assets[0].uri);

  // };
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
        <TouchableOpacity style={styles.btnCam} onPress={openCameraLib}>
          <Text style={styles.textBtn}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCam} onPress={openLib}>
          <Text style={styles.textBtn}>Open Gallery</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 300,
    alignSelf: "center",
    borderRadius: 6,
  },
  btnCam: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 6,
  },
  textBtn: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
