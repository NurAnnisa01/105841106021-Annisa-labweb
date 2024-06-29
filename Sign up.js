import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

const CustomButton = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { fontFamily: 'Metro-Medium' }]}>{text}</Text>
    </TouchableOpacity>
  );
};
const CustomTextInput = ({ placeholder, color, typeKeyboard, secureTextEntry }) => {
  return (
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.textInput, { borderColor: color, fontFamily: 'Metro-Medium' }]}
    />
  );
};

export default function SignUpScreen() {
  const [fontsLoaded] = useFonts({
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metro-Bold' }]}>Sign Up</Text>
      <CustomTextInput placeholder="Name" color="gray" typeKeyboard="default" />
      <CustomTextInput placeholder="Email" color="gray" typeKeyboard="email-address" />
      <CustomTextInput placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <CustomButton text="SIGN UP" color="red" onPress={() => {}} />
      <Text style={[styles.alreadyText, { fontFamily: 'Metro-Medium' }]}>Already have an account?</Text>
      <Text style={[styles.orText, { fontFamily: 'Metro-Medium' }]}>Or sign up with social account</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/gooogle.jpeg')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/facebook.jpeg')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Metro-Medium',
  },
  alreadyText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  orText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});