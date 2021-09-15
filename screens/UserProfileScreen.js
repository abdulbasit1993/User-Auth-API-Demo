import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const UserProfileScreen = ({navigation, route: {params}}) => {
  console.log(params);
  const [data, setData] = useState([]);

  const getUserData = () => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(function (response) {
        console.log('Data is: ' + response.data.data);
        setData(response.data.data);
        alert(JSON.stringify(response.data.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        alert('Finally is called');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>Welcome {params.key} !</Text>
      <Button onPress={getUserData} title="GET USER DATA" />
      <Image source={{uri: data.avatar}} style={styles.imageStyle} />
      <Text style={styles.textStyle}>
        Name: {data.first_name} {data.last_name}
      </Text>
      <Text style={styles.textStyle}>Email: {data.email}</Text>
      <Text style={styles.textStyle}>User ID: {data.id}</Text>

      <View style={{position: 'absolute', bottom: 80}}>
        <Button
          title="Go to User Listings"
          onPress={() => navigation.navigate('UserListingScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'slateblue',
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginBottom: 15,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default UserProfileScreen;
