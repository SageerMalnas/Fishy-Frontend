// import React from 'react';
// import { Button, View } from 'react-native';

// function HomeScreen({ navigation }) {
//   return (
// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Button
//   onPress={() => navigation.navigate('Notifications')}
//   title="Go to notifications"
// />
// </View>
//   );
// }

// export default HomeScreen;

import React, { useRef, useEffect } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const titleAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(titleAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [titleAnim]);

  return (
    <ImageBackground source={require('../assets/AppBackground.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Animated.Text style={[styles.title, { transform: [{ translateX: titleAnim }] }]}>
          Fish Species Identification
        </Animated.Text>
        <Text style={styles.subtitle}>and Disease Detection</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
