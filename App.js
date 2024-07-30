import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageSlider from './imageSlider';
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flower</Text>
      <Image
        source={require('./assets/homescreen.jpeg')}
        style={styles.image}
      />
      <Button
        title="Go to Image Slider"
        onPress={() => navigation.navigate('Image Slider')}
      />
    </View>
  );
}

const products = [
  { id: '1', name: 'bunga 1', price: 'Rp. 80.000', image: require('./assets/bunga1.jpeg') },
  { id: '2', name: 'bunga 2', price: 'Rp. 100.000', image: require('./assets/bunga2.jpeg') },
  { id: '3', name: 'bunga 3', price: 'Rp. 150.000', image: require('./assets/bunga3.jpeg') },
  { id: '4', name: 'bunga 4', price: 'Rp. 175.000', image: require('./assets/bunga4.jpeg') },
];

function ShopScreen() {
  const handleAddToCart = (productName) => {
    console.log(`Adding ${productName} to cart`);
    Alert.alert('Added to Cart', `You have added ${productName} to your cart.`);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => handleAddToCart(item.name)}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  product: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Image Slider" component={ImageSlider} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
