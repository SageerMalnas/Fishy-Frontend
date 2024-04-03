
// import { useState } from 'react';
// import { StyleSheet, Text, View, Button, Image, ActivityIndicator} from 'react-native';
// import * as ImagePicker from "expo-image-picker"
// import {firebase} from '../../config'

// export default function UploadScreen() {

//   const [image, setImage] = useState(null)
//   const [uploading, setUploading] = useState(false)


//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
  
//     console.log("Image picker result:", result);
  
//     if (!result.cancelled) {
//       // Access the URI of the first asset in the assets array
//       const selectedImageUri = result.assets[0].uri;
//       setImage(selectedImageUri);
//       console.log("Image URI:", selectedImageUri);
//     }
//   };
  
//   const uploadImage = async () => {
//     try {
//       if (!image) {
//         console.log("No image selected");
//         return;
//       }
  
//       setUploading(true);
  
//       const response = await fetch(image);
//       const blob = await response.blob();
  
//       const ref = firebase.storage().ref().child(`Pictures/Image1`);
//       const snapshot = await ref.put(blob);
  
//       const downloadURL = await snapshot.ref.getDownloadURL();
  
//       console.log("Download URL:", downloadURL);
//       setImage(downloadURL);
//       setUploading(false);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       setUploading(false);
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       {image && <Image source={{uri: image}} style={{width: 170 , height: 200}}/>}
//       <Button title='Select Image' onPress={pickImage} />
//       {!uploading ? <Button title='Upload Image' onPress={uploadImage} />: <ActivityIndicator size={'small'} color='black' />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../config';

export default function UploadScreen() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Image picker result:", result);

    if (!result.cancelled) {
      const selectedImageUri = result.assets[0].uri;
      setImages(prevImages => [...prevImages, selectedImageUri]); // Append the new image to the array of images
      console.log("Image URI:", selectedImageUri);
    }
  };

  const generateUniqueId = () => {
    // Generate a unique ID using a combination of timestamp and random string
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(7);
    return `${timestamp}-${randomString}`;
  };

  const uploadImages = async () => {
    try {
      if (images.length === 0) {
        console.log("No images selected");
        return;
      }

      setUploading(true);

      const uploadTasks = images.map(async (imageUri, index) => {
        const response = await fetch(imageUri);
        const blob = await response.blob();

        const uniqueId = generateUniqueId(); // Generate a unique identifier for each image
        const ref = firebase.storage().ref().child(`Pictures/${uniqueId}`); // Use the unique identifier as the image name
        const snapshot = await ref.put(blob);

        const downloadURL = await snapshot.ref.getDownloadURL();

        console.log(`Download URL for Image ${index + 1}:`, downloadURL);
        return downloadURL;
      });

      // Wait for all upload tasks to complete
      const uploadedImageURLs = await Promise.all(uploadTasks);

      console.log("All images uploaded successfully:", uploadedImageURLs);
      setImages([]); // Clear the images array
      setUploading(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={{ width: 170, height: 200, marginBottom: 10 }} />
      ))}
      <Button title='Select Image' onPress={pickImage} />
      {!uploading ? <Button title='Upload Images' onPress={uploadImages} /> : <ActivityIndicator size={'small'} color='black' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
