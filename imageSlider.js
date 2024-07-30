import React, { Component } from 'react';
import { SafeAreaView, View, Image, StyleSheet, TouchableHighlight, Text } from 'react-native';
import ImageSlider from 'react-native-image-slider';

class CustomImageSlider extends Component {
  render() {
    const images = [
      require('./assets/bunga1.jpeg'),
      require('./assets/bunga2.jpeg'),
      require('./assets/bunga3.jpeg'),
      require('./assets/bunga4.jpeg'),
    ];

    return (
      <SafeAreaView style={styles.container}>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={item} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customSlide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 300,
    height: 500,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    margin: 3,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  buttonSelected: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default CustomImageSlider;
