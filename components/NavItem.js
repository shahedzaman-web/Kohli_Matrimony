import React from 'react';
import { View, Text , StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavItem({title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.navView}>
      <TouchableOpacity  onPress={() => 
        navigation.navigate("Home")}>
      <Image
      style={styles.navImage}
      source={require("./../Icons/Back.png")}
    />
      </TouchableOpacity>
   
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