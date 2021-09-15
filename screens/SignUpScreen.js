import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../consts/color';
import STYLES from '../styles';

function SignUpScreen({navigation, route: {params}}) {
  console.log('params -- > ', params);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Text style={styles.firstWordText}>USER</Text>
          <Text style={styles.secondWordText}>AUTH</Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Welcome Back,</Text>
          <Text style={styles.secondheadingText}>Sign up to continue</Text>
        </View>
        <View style={styles.inputsView}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              size={20}
              color={COLORS.light}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Name" style={STYLES.input} />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              size={20}
              color={COLORS.light}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
        </View>
        <View style={STYLES.inputContainer}>
          <Icon
            name="lock-outline"
            size={20}
            color={COLORS.light}
            style={STYLES.inputIcon}
          />
          <TextInput
            placeholder="Password"
            style={STYLES.input}
            secureTextEntry
          />
        </View>
        <View style={STYLES.btnPrimary}>
          <Text style={styles.btnText}>Sign Up</Text>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.donthaveaccount}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signuptext}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  firstWordText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.dark,
  },
  secondWordText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.secondary,
  },
  headingContainer: {
    marginTop: 70,
  },
  headingText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  secondheadingText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: COLORS.light,
  },
  inputsView: {
    marginTop: 20,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  donthaveaccount: {
    color: COLORS.light,
    fontWeight: 'bold',
  },
  signuptext: {
    color: COLORS.pink,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
