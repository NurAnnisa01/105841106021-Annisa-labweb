import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { fontFamily: 'Metropolis-Medium' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const TextInputCustom = ({ placeholder, color, typeKeyboard, secureTextEntry }) => {
  return (
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      style={[styles.textInput, { borderColor: color, fontFamily: 'Metropolis-Medium' }]}
    />
  );
};

export default function Login({navigation}) {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Login</Text>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <Text style={[styles.forgotPasswordText, { fontFamily: 'Metropolis-Medium' }]}>Forgot your password?</Text>
      <ButtonCustom text="LOGIN" color="red" onPress={()=>navigation.navigate("Signup")} />
      <Text style={[styles.orText, { fontFamily: 'Metropolis-Medium' }]}>Or login with social account</Text>
      <View style={styles.socialContainer}>
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
  forgotPasswordText: {
    alignSelf: 'center',
    marginBottom: 20,
    color: 'gray',
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
  },
  orText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  socialContainer: {
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