import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserProfileScreen from './screens/UserProfileScreen';
import UserListingScreen from './screens/UserListingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
