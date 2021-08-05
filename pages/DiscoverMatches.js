import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottonMenu from "../components/BottomMenu";
import NavItem from "../components/NavItem";

export default function DiscoverMatches() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <NavItem title="Discover Matches" />
        <View>
          <View>
            <Image
              style={styles.persion}
              source={require("../images/face.jpg")}
            />
          </View>
          <View style={styles.infoView}>
            <Text style={styles.name}>Laksh</Text>
            <Text style={styles.persionInfo}>29 Yrs., 5'8'', B. Tech.,</Text>
            <Text style={styles.persionInfo}>Banking Professional</Text>
            <Text style={styles.persionInfo}>Jaipur</Text>
          </View>
          <View style={styles.chat}>
            <Image
              style={styles.chatImage}
              source={require("../Icons/Messages_color.png")}
            />
            <Text style={styles.chatText}>Chat</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <BottonMenu />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  profile: {
    paddingLeft: 32,
  },
  persion: {
    width: 300,
    height: 300,
    marginTop: 30,
    borderRadius: 10,
  },
  infoView: {
    paddingTop: 30,
  },

  name: {
    fontSize: 28,
  },
  persionInfo: {
    fontSize: 20,
  },

  chatImage: {
    width: 30,
    height: 30,
  },
  chat: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
  },
  chatText: {
    color: "#8D2828",
    fontSize: 20,
    paddingLeft: 10,
  },
  bottomMenu: {
    height: 50,
    backgroundColor: "#8D2828",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
