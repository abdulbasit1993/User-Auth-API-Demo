import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

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

const FormikDemoScreen = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
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
        <View style={{backgroundColor: 'yellow'}}>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email && (
            <Text style={styles.errors}>{errors.email}</Text>
          )}
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {errors.password && touched.password && (
            <Text style={styles.errors}>{errors.password}</Text>
          )}
          <Button onPress={handleSubmit} title="Submit" disabled={!isValid} />
        </View>
      )}
    </Formik>
  );
};

export default FormikDemoScreen;

const styles = StyleSheet.create({
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
