import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserListingScreen from './screens/UserListingScreen';
import FormikDemoScreen from './screens/FormikDemoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{title: 'Sign in'}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{title: 'Sign Up'}}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{title: 'User Profile Screen'}}
        />
        <Stack.Screen
          name="UserListingScreen"
          component={UserListingScreen}
          options={{title: 'User Listing Screen'}}
        />
        <Stack.Screen
          name="FormikDemoScreen"
          component={FormikDemoScreen}
          options={{title: 'Formik Demo Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
