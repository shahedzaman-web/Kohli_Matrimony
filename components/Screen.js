import React from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';

export default function Screen({children}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./../Icons/Bg.png')}  style={styles.image}>
        {children}
        </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
   
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
   
    },
  });
  