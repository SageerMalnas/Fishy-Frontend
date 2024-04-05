
import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AppTextInput from './AppTextInput'
// eslint-disable-next-line no-unused-vars

const Register = ({ navigation: { navigate } }) => {
  const handleSignIn = () => {
    console.log('Signing in...');
    navigate("AppStack");
    
  };
  // eslint-disable-next-line no-unused-vars
  const [focused, setFocused] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: "#f0f8ff"}}>
      <View style={{ padding: 40 }}>
        <View style={{ alignItems: 'center' }}>

          <Text style={{ fontSize: 25, color: '#1d3557', marginVertical: 50, fontWeight: 'bold' }}>
            Create Account
          </Text>
          {/* <Text style={{ fontSize: 15, maxWidth: '80%', textAlign: 'center', fontWeight: '600' }}>
            Create an account so you can explore all the Social platform
          </Text> */}
        </View>
        <View style={{ marginVertical: 10 }}>
          <AppTextInput placeholder='Name' />
          <AppTextInput placeholder='Email' />
          <AppTextInput placeholder='Password' />
          <AppTextInput placeholder='Confirm Password' />
        </View>
        <TouchableOpacity style={{
          padding: 10,
          marginVertical: 5,
          backgroundColor: '#1d3557',
          borderRadius: 10,
          shadowColor: '#1f41bb',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10}}
          onPress={handleSignIn}>

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

// import React, { useState } from 'react';
// import { Text, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
// import { firebase } from '../../config'; // Import your Firebase configuration

// const Register = ({ navigation: { navigate } }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignUp = async () => {
//     try {
//       if (password !== confirmPassword) {
//         setErrorMessage("Passwords don't match");
//         return;
//       }

//       await firebase.auth().createUserWithEmailAndPassword(email, password);
//       navigate('AppStack'); // Navigate to the main app screen upon successful signup
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f8ff', padding: 40 }}>
//       <View>
//         <Text style={{ fontSize: 25, color: '#1d3557', marginVertical: 20, fontWeight: 'bold' }}>
//           Create Account
//         </Text>
//         <Text style={{ fontSize: 15, maxWidth: '80%', textAlign: 'center', fontWeight: '600' }}>
//           Create an account so you can explore all the Social platform
//         </Text>

//         <TextInput
//           placeholder='Name'
//           style={{ borderBottomWidth: 1, borderColor: '#ddd', marginBottom: 10 }}
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           placeholder='Email'
//           style={{ borderBottomWidth: 1, borderColor: '#ddd', marginBottom: 10 }}
//           value={email}
//           onChangeText={setEmail}
//           keyboardType='email-address'
//         />
//         <TextInput
//           placeholder='Password'
//           style={{ borderBottomWidth: 1, borderColor: '#ddd', marginBottom: 10 }}
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <TextInput
//           placeholder='Confirm Password'
//           style={{ borderBottomWidth: 1, borderColor: '#ddd', marginBottom: 10 }}
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           secureTextEntry
//         />

//         {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}

//         <TouchableOpacity
//           style={{
//             padding: 10,
//             marginVertical: 5,
//             backgroundColor: '#1d3557',
//             borderRadius: 10,
//             shadowColor: '#1f41bb',
//             shadowOffset: { width: 0, height: 10 },
//             shadowOpacity: 0.3,
//             shadowRadius: 10
//           }}
//           onPress={handleSignUp}
//         >
//           <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20 }}>Sign up</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigate('Login')} style={{ padding: 10 }}>
//           <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>Already have an account?</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Register;
