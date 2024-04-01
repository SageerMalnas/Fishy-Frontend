// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';



// import InputField from '../components/InputField';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import RegistrationSVG from '../assets/images/misc/registration.svg';
// import GoogleSVG from '../assets/images/misc/google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';
// import CustomButton from '../components/CustomButton';

// const RegisterScreen = ({navigation}) => {
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   const [dobLabel, setDobLabel] = useState('Date of Birth');

//   return (
//     <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{paddingHorizontal: 25}}>
//         <View style={{alignItems: 'center'}}>
//           <RegistrationSVG
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
//           Register
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

//         <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
//           Or, register with email ...
//         </Text>

//         <InputField
//           label={'Full Name'}
//           icon={
//             <Ionicons
//               name="person-outline"
//               size={20}
//               color="#666"
//               style={{marginRight: 5}}
//             />
//           }
//         />

//         <InputField
//           label={'Email ID'}
//           icon={
//             <MaterialIcons
//               name="alternate-email"
//               size={20}
//               color="#666"
//               style={{marginRight: 5}}
//             />
//           }
//           keyboardType="email-address"
//         />

//         <InputField
//           label={'Password'}
//           icon={
//             <Ionicons
//               name="ios-lock-closed-outline"
//               size={20}
//               color="#666"
//               style={{marginRight: 5}}
//             />
//           }
//           inputType="password"
//         />

//         <InputField
//           label={'Confirm Password'}
//           icon={
//             <Ionicons
//               name="ios-lock-closed-outline"
//               size={20}
//               color="#666"
//               style={{marginRight: 5}}
//             />
//           }
//           inputType="password"
//         />

//         <View
//           style={{
//             flexDirection: 'row',
//             borderBottomColor: '#ccc',
//             borderBottomWidth: 1,
//             paddingBottom: 8,
//             marginBottom: 30,
//           }}>
//           <Ionicons
//             name="calendar-outline"
//             size={20}
//             color="#666"
//             style={{marginRight: 5}}
//           />
//           <TouchableOpacity onPress={() => setOpen(true)}>
//             <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
//               {dobLabel}
//             </Text>
//           </TouchableOpacity>
//         </View>

       

//         <CustomButton label={'Register'} onPress={() => {}} />

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginBottom: 30,
//           }}>
//           <Text>Already registered?</Text>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default RegisterScreen;



/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AppTextInput from './AppTextInput'
// eslint-disable-next-line no-unused-vars
const Register = ({ navigation: { navigate } }) => {

  // eslint-disable-next-line no-unused-vars
  const [focused, setFocused] = useState(false);
  return (
    <SafeAreaView>
      <View style={{ padding: 40 }}>
        <View style={{ alignItems: 'center' }}>

          <Text style={{ fontSize: 25, color: '#1d3557', marginVertical: 20, fontWeight: 'bold' }}>
            Create Account
          </Text>
          <Text style={{ fontSize: 15, maxWidth: '80%', textAlign: 'center', fontWeight: '600' }}>
            Create an account so you can explore all the Social platform
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <AppTextInput placeholder='Name' />
          <AppTextInput placeholder='Email' />
          <AppTextInput placeholder='Password' />
          <AppTextInput placeholder='Confirm Password' />
        </View>
        <TouchableOpacity style={{
          padding: 20,
          marginVertical: 5,
          backgroundColor: '#1d3557',
          borderRadius: 10,
          shadowColor: '#1f41bb',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10}}>

          <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 20
          }}>
            Sign up
          </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          console.log('login');
          navigate("Login");
        }} style={{
          padding: 10}}>

          <Text style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 14
          }}>
            Already have an account?
          </Text>

        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
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

export default Register;
