import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useState, useReducer} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthContext} from './context';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserListingScreen from './screens/UserListingScreen';
import Splash from './screens/Splash';

import SplashScreen from 'react-native-splash-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        console.log('ok');
        console.log(action);
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async token => {
        try {
          console.log('token::', token);
          dispatch({type: 'LOGIN', token});
          await AsyncStorage.setItem('Token', token);
        } catch (err) {
          console.log(err.message);
        }
      },
      signUp: async token => {
        // setIsLoading(false);
        // setUserToken(token);
        try {
          console.log('sign up token:', token);
          dispatch({type: 'REGISTER', token});
          await AsyncStorage.setItem('Token', token);
        } catch (err) {
          console.log(err.message);
        }
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('Token');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('Token');
      } catch (e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
    SplashScreen.hide();
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken ? (
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
