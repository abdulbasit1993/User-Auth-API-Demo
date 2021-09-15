import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NewUserDemoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>New User Demo Screen</Text>
    </View>
  );
};

export default NewUserDemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
