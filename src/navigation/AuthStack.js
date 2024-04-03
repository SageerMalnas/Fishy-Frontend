import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AppStack from '../navigation/AppStack';
import Loader from '../screens/Loader'; // Import the Loader component

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="Loader" component={Loader} />
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;


// import React, { useState, useEffect } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../screens/OnboardingScreen';
// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import AppStack from '../navigation/AppStack';
// import Loader from '../screens/Loader'; // Import the Loader component

// const Stack = createNativeStackNavigator();

// const AuthStack = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Loader" component={Loader} />
//       {!isLoading && (
//         <>
//           <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Register" component={RegisterScreen} />
//           <Stack.Screen name="AppStack" component={AppStack} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// };

// export default AuthStack;
