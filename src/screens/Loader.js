import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Loader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }
      )
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Ionicons name="fish" size={100} color="#1d3557" style={styles.icon} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 20,
  },
});

export default Loader;

// import React, { useRef, useEffect } from 'react';
// import { View, StyleSheet, Animated } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Loader = () => {
//   const fishPosition = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(
//         fishPosition,
//         {
//           toValue: 1,
//           duration: 3000,
//           useNativeDriver: true,
//         }
//       )
//     ).start();
//   }, [fishPosition]);

//   const translateX = fishPosition.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-100, 100],
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.fishContainer, { transform: [{ translateX }] }]}>
//         <Ionicons name="fish" size={100} color="#1d3557" style={styles.icon} />
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'lightblue',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fishContainer: {
//     position: 'absolute',
//     top: '50%',
//   },
//   icon: {
//     marginTop: 20,
//   },
// });

// export default Loader;
