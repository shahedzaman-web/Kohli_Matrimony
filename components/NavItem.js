import React from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';

export default function NavItem({title}) {
  return (
    <View style={styles.navView}>
    <Image
      style={styles.navImage}
      source={require("./../Icons/Back.png")}
    />
    <Text style={styles.headerText} > {title}</Text>
  </View>
  );
}
const styles = StyleSheet.create({
   headerText: {
    color: "#8D2828",
    fontSize: 28,
  },
  navImage: {
    width: 32,
    height: 32,
  },
  navView: {
    display: "flex",
    flexDirection: "row",
  }})