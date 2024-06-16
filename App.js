import { Text, View, TextInput, Button } from "react-native";
import React from "react";

const App = () => {
  const Inputan = ({ nama, color }) => {
    return (
      <TextInput
        placeholder={`Masukan ${nama}`}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 10,
          width: 250,
          height: 50,
          marginVertical: 10,
          padding: 10,
          backgroundColor: "blue",
          color: color,
        }}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 40, marginBottom: 150 }}></Text>
          <Button title="Sign Up" onPress={() => {}} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 40, marginBottom: 150}}></Text>
          
          <Button title="Sign In" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default App;
