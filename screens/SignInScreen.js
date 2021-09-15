import React, {useState} from 'react';
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
import {Formik} from 'formik';
import * as yup from 'yup';

import COLORS from '../consts/color';
import STYLES from '../styles';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

function SignInScreen({navigation}) {
  const [useremail, setUseremail] = useState('');
  const [userpass, setUserpass] = useState('');

  const signInHandler = values => {
    // alert(JSON.stringify(values));
    navigation.navigate('UserProfileScreen', {key: values.email});
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={signInHandler}
      validationSchema={loginValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.logoContainer}>
              <Text style={styles.firstWordText}>USER</Text>
              <Text style={styles.secondWordText}>AUTH</Text>
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Welcome Back,</Text>
              <Text style={styles.secondheadingText}>Sign in to continue</Text>
            </View>
            <View style={styles.inputsView}>
              <View style={STYLES.inputContainer}>
                <Icon
                  name="mail-outline"
                  size={20}
                  color={COLORS.light}
                  style={STYLES.inputIcon}
                />
                <TextInput
                  placeholder="Email"
                  style={STYLES.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
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
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errors}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={[
                STYLES.btnPrimary,
                {backgroundColor: isValid ? COLORS.primary : '#CACFD2'},
              ]}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.donthaveaccount}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SignUpScreen', {key: useremail})
                }>
                <Text style={styles.signuptext}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default SignInScreen;

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
    marginLeft: 5,
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
