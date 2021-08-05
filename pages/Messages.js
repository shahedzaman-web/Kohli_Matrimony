import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavItem from "../components/NavItem";
import { Avatar } from "react-native-paper";
import BottonMenu from "../components/BottomMenu";
import Screen from "../components/Screen";

export default function Messages() {
  return (
    <Screen>
    <View style={styles.container}>
      <View style={styles.topView}>
        <NavItem title="Messages" />
        <View style={styles.chatContainer}>
          <TouchableOpacity style={styles.chatView}>
            <Avatar.Image size={60} source={require("./../images/face.jpg")} />
            <View style={styles.chatText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>Hi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatView}>
            <Avatar.Image size={60} source={require("./../images/face.jpg")} />
            <View style={styles.chatText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>Hi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatView}>
           <Avatar.Image size={60} source={require("./../images/face.jpg")} />
            <View style={styles.chatText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>Hi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatView}>
           <Avatar.Image size={60} source={require("./../images/face.jpg")} />
            <View style={styles.chatText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>Hi</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <BottonMenu />
      </View>
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  topView: {
    paddingLeft: 32,
  },
  chatContainer: {
    marginTop: 16,
  },
  chatView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  chatText: {
    marginLeft: 32,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomMenu: {
    height: 50,
    backgroundColor: "#8D2828",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
