// import React from 'react'
// import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import Gaming from '../assets/images/misc/gaming.svg';

// const OnboardingScreen = ({navigation}) => {
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}>
//       <View style={{marginTop: 20}}>
//         <Text
//           style={{
//             fontFamily: 'Inter-Bold',
//             fontWeight: 'bold',
//             fontSize: 30,
//             color: '#20315f',
//           }}>
//           GAMEON
//         </Text>
//       </View>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         {/* <Gaming
//           width={300}
//           height={300}
//           style={{transform: [{rotate: '-15deg'}]}}
//         /> */}
//       </View>
//       <TouchableOpacity
//         style={{
//           backgroundColor: '#AD40AF',
//           padding: 20,
//           width: '90%',
//           borderRadius: 10,
//           marginBottom: 50,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}
//         onPress={() => navigation.navigate('Login')}>
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 18,
//             textAlign: 'center',
//             fontWeight: 'bold',
//             fontFamily: 'Roboto-MediumItalic',
//           }}>
//           Let's Begin
//         </Text>
//         <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default OnboardingScreen;

/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height} = Dimensions.get('window');

const Welcome = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: "#f0f8ff"}}>
      <View >
        <ImageBackground
          style={{height: height / 4.5, marginTop:80}}
          resizeMode="contain"
          source={require('../../assets/Logo.png')} />
        <View style={{paddingHorizontal:40, paddingTop:40 }}>
            <Text style={{fontSize: 35, color: '#1F41BB', textAlign: 'center'}}>
                Discover Your Social Platform Here
            </Text>

            <Text style={{fontSize:14, color:'#000', textAlign:'center', marginTop:20}}>
                Explore all the soical role based on your interest
            </Text>
        </View>
        <View style={{paddingHorizontal:20, paddingTop:60, flexDirection:"row"}}>
          <TouchableOpacity
            onPress={() => {
              console.log('login');
              navigate("Login");
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#1d3557',
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: '48%',
              borderRadius: 10,
              shadowColor: '#1f41bb',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.3,
              shadowRadius: 10}}>
                <Text style={{color:'#fff', fontSize:20, textAlign:'center'}}>
                    Login
                </Text>
            </TouchableOpacity>


            <TouchableOpacity style={{paddingVertical:15, paddingHorizontal:20, width:'48%', borderRadius:10,  shadowColor: '#FFF',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.3,
              shadowRadius: 10}}
              onPress={() => {
                console.log('login');
                navigate("Register");
              }}
              >
                <Text style={{color:'#000', fontSize:20, textAlign:'center'}}>
                    Register
                </Text>

            </TouchableOpacity>
        </View>

      </View>   
    </SafeAreaView>
   
  );
};

export default Welcome;
