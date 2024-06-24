import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
const ButtonCostum = ({ text, color }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: color,
          width: 250,
          height: 100,
          borderRadius: 50,
          justifyContent: "center",
          marginButtom: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontsize: 30,
            fontWeight: "bold",
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

// Custom component, TextInputCustom
const TextInputCustom = ({ placeholder, color, typeKeyboard }) => {
  return (
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      style={{
        width: 250,
        height: 50,
        borderColor: color,
        borderWidth: 3,
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
      }}
    />
  );
};
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInputCustom
        placeholder="Masukkan Nama"
        color="pink"
        typeKeyboard="default"
      />
      <TextInputCustom
        placeholder="Masukkan Nomor hp"
        color="pink"
        typeKeyboard="numeric"
      />
    </View>
  );
};
export default App;

const style = StyleSheet.create({});
