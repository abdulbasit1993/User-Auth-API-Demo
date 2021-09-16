import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthContext} from './context';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserListingScreen from './screens/UserListingScreen';
import Splash from './screens/Splash';

import SplashScreen from 'react-native-splash-screen';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: token => {
        setIsLoading(false);
        setUserToken(token);
      },
      signUp: token => {
        setIsLoading(false);
        setUserToken(token);
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    SplashScreen.hide();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
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
          </Stack.Navigator>
        ) : (
          <AuthStack.Navigator screenOptions={{headerShown: false}}>
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
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
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
