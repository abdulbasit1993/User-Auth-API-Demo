import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import axios from 'axios';

const UserListingScreen = () => {
  const [data, setData] = useState([]);

  const getUserListings = () => {
    axios
      .get('https://reqres.in/api/users?page=1')
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
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={getUserListings}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>GET USER LISTINGS</Text>
      </TouchableOpacity>
      {data.map(item => (
        <View style={styles.itemStyle}>
          <Image style={styles.imageStyle} source={{uri: item.avatar}} />
          <Text style={styles.textStyle}>User ID: {item.id}</Text>
          <Text style={styles.textStyle}>
            Name: {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.textStyle}>Email: {item.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'slateblue',
  },
  buttonStyle: {
    backgroundColor: 'red',
    padding: 10,
    width: '50%',
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  itemStyle: {
    padding: 20,
    backgroundColor: 'blue',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  textStyle: {
    fontSize: 20,
  },
  imageStyle: {
    width: 75,
    height: 75,
  },
});

export default UserListingScreen;
