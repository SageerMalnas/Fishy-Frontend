
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { COLORS } from '../consts/colors';
import { FontAwesome5 } from '@expo/vector-icons';

const OpenCamera = ({ navigation }) => {
  const [media, setMedia] = useState(null);

  const openCameraLib = async (mediaType) => {
    let pickerResult;
    if (mediaType === 'image') {
      pickerResult = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    } else if (mediaType === 'video') {
      pickerResult = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
    }

    handlePickerResult(pickerResult);
  };

  const openLib = async (mediaType) => {
    let pickerResult;
    if (mediaType === 'image') {
      pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    } else if (mediaType === 'video') {
      pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
    }

    handlePickerResult(pickerResult);
  };

  const handlePickerResult = (result) => {
    if (!result.cancelled) {
      setMedia(result.uri);
    }
  };

  const removeMedia = () => {
    setMedia(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>Hello Rutuja</Text>
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
            <View style={styles.mediaContainer}>
              {media && media.endsWith('.mp4') ? (
                <Video
                  source={{ uri: media }}
                  style={styles.media}
                  useNativeControls
                  resizeMode="contain"
                />
              ) : media ? (
                <Image
                  resizeMode="contain"
                  style={styles.media}
                  source={{ uri: media }}
                />
              ) : null}
              {media && (
                <TouchableOpacity style={styles.removeButton} onPress={removeMedia}>
                  <FontAwesome5 name="times-circle" size={24} color={COLORS.red} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#7affec' }]} onPress={() => openCameraLib('image')}>
                <FontAwesome5 name="camera" size={24} color={COLORS.white} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#7affec' }]} onPress={() => openLib('image')}>
                <FontAwesome5 name="images" size={24} color={COLORS.white} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#7affec' }]} onPress={() => openCameraLib('video')}>
                <FontAwesome5 name="video" size={24} color={COLORS.white} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#7affec' }]} onPress={() => openLib('video')}>
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

export default OpenCamera;
