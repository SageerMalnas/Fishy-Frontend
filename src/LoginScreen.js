// // src/LoginScreen.js

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Here you would typically validate the user's credentials
//     // For now, let's just navigate to the Home screen
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         secureTextEntry
//         onChangeText={setPassword}
//         style={styles.input}
//       />
//       <Button title="Log In" onPress={handleLogin} />
//       <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     padding: 10,
//   },
// });


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";
// import { firebase } from "../config";
// import Signup from "./signup";
// import { CounsellorDashboard, StudentDashboard } from "./student-dashboard";

const Login = ({ navigation }) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [value, setValue] = React.useState("Student");

	loginUser = async (email, password) => {
		try {
			//await firebase.auth().signInWithEmailAndPassword(email, password);
			console.log(email);
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<>
			<TextInput
				style={styles.textbox}
				label="Email"
				value={email}
				mode="outlined"
				onChangeText={(text) => setEmail(text)}
			/>

			<TextInput
				style={styles.textbox}
				label="Password"
				value={password}
				mode="outlined"
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
			/>

			<Button  onPress={() => navigation.navigate("Home")} style={styles.button} mode="contained">
				Log In
			</Button>

			<Text style={styles.text} variant="displaySmall">
				Don't have an account?
			</Text>

			<Button title="Signup" onPress={() => navigation.navigate("Signup")} style={styles.button} mode="contained">
				Sign Up
			</Button>
		</>
	);
};

export default Login;

const styles = StyleSheet.create({
	textbox: {
		margin: 10
	},
	button: {
		margin: 10,
		color: "#1d3557"
	},
	text: {
		margin: 10,
		textAlign: "center"
	},
	viewcheck: {
		flexDirection: "row",
		margin: 5,
		alignItems: "center"
	},
	radio: {
		flexDirection: "row",
		padding: 5,
		alignItems: "center"
	}
});