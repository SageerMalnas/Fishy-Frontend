// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import LoginSVG from '../assets/images/misc/login.svg';
// import GoogleSVG from '../assets/images/misc/google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';

// import CustomButton from '../components/CustomButton';
// import InputField from '../components/InputField';

// const LoginScreen = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
//       <View style={{paddingHorizontal: 25}}>
//         <View style={{alignItems: 'center'}}>
//           <LoginSVG
//             height={300}
//             width={300}
//             style={{transform: [{rotate: '-5deg'}]}}
//           />
//         </View>

//         <Text
//           style={{
//             fontFamily: 'Roboto-Medium',
//             fontSize: 28,
//             fontWeight: '500',
//             color: '#333',
//             marginBottom: 30,
//           }}>
//           Login
//         </Text>

//         <InputField
//           label={'Email ID'}
//           icon={
//             <MaterialIcons
//             name="alternate-email"
//             size={20}
//             color="#666"
//             style={{marginRight: 5}}
//           />
//           }
//           keyboardType="email-address"
//         />

// <InputField
//           label={'Password'}
//           icon={
//             <Ionicons
//             name="ios-lock-closed-outline"
//             size={20}
//             color="#666"
//             style={{marginRight: 5}}
//           />
//           }
//           inputType="password"
//           fieldButtonLabel={"Forgot?"}
//           fieldButtonFunction={() => {}}
//         />
        
//         <CustomButton label={"Login"} onPress={() => {}} />

//         <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
//           Or, login with ...
//         </Text>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginBottom: 30,
//           }}>
//           <TouchableOpacity
//             onPress={() => {}}
//             style={{
//               borderColor: '#ddd',
//               borderWidth: 2,
//               borderRadius: 10,
//               paddingHorizontal: 30,
//               paddingVertical: 10,
//             }}>
//             <GoogleSVG height={24} width={24} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {}}
//             style={{
//               borderColor: '#ddd',
//               borderWidth: 2,
//               borderRadius: 10,
//               paddingHorizontal: 30,
//               paddingVertical: 10,
//             }}>
//             <FacebookSVG height={24} width={24} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {}}
//             style={{
//               borderColor: '#ddd',
//               borderWidth: 2,
//               borderRadius: 10,
//               paddingHorizontal: 30,
//               paddingVertical: 10,
//             }}>
//             <TwitterSVG height={24} width={24} />
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginBottom: 30,
//           }}>
//           <Text>New to the app?</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//             <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;


/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextInput from './AppTextInput'
const LoginScreen = ({ navigation: { navigate } }) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ height: 100 , marginTop: 40}}
            resizeMode="contain"
            source={require('../../assets/Logo.png')}
          />
          <Text style={{ fontSize: 30, color: '#1d3557', marginVertical: 10, fontWeight: 'bold' }}>
            Login Here
          </Text>
          <Text style={{ fontSize: 24, maxWidth: '70%', textAlign: 'center', fontWeight: '600' }}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View style={{ marginVertical: 30 }}>
          <AppTextInput placeholder='Email' />
          <AppTextInput placeholder='Password' />
        </View>

        <View>
          <Text style={{
            fontSize: 14,
            color: '#1f41bb',
            alignSelf: 'flex-end'
          }}>
            Forgot your password ?
          </Text>
        </View>
        <TouchableOpacity style={{
          padding: 10,
          marginVertical: 20,
          backgroundColor: '#1d3557',
          borderRadius: 10,
          shadowColor: '#1f41bb',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10
        }}>

          <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 20
          }}>
            Sign in
          </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          console.log('login');
          navigate("Register");
        }} style={{
          padding: 5
        }}>

          <Text style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 14
          }}>
            Create new account
          </Text>

        </TouchableOpacity>

        <View style={{ marginVertical:  20 }}>
          <Text style={{ color: '#1f41bb', textAlign: 'center', fontSize: 14 }}>
            or continue with
          </Text>

          <View style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginHorizontal: 10 }}>
              <Ionicons name="logo-google" color="#000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginHorizontal: 10 }}>
              <Ionicons name="logo-apple" color="#000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginHorizontal: 10 }}>
              <Ionicons name="logo-twitter" color="#000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginHorizontal: 10 }}>
              <Ionicons name="logo-facebook" color="#000" size={20} />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
