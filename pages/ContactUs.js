import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NavItem from "../components/NavItem";

export default function componentName() {
  return (
    <View style={styles.container}>
        <NavItem  title="Contact Us" />
      
        <View style={styles.infoView}>
          <Text style={styles.infoText}>Umesh Lanje </Text>
          <View style={styles.detailsView}>
          <Image
          style={styles.infoImage}
          source={require("./../Icons/Mobile.png")}
        /> 
            <Text style={styles.infoText}>9923423018</Text>
          </View>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>Shubham Lanje </Text>
          <View style={styles.detailsView}>
          <Image
          style={styles.infoImage}
          source={require("./../Icons/Mobile.png")}
        /> 
            <Text style={styles.infoText}>9067048116</Text>
          </View>
        </View>
        <View style={styles.infoView}>
        <View style={styles.detailsView}>
        <Image
          style={styles.infoImage}
          source={require("./../Icons/Mail.png")}
        /> 
          <Text style={styles.infoEmail}>lanjeconstruction@gmail.com </Text>
        </View>
        </View>
        <View style={styles.infoView}>
        <View style={styles.detailsView}>
        <Image
          style={styles.infoImage}
          source={require("./../Icons/Location.png")}
        /> 
          <Text style={styles.infoText}>
            Aai sadan, At Kawatha Arjuni/mor, Dist Gondia, MH, 441702{" "}
          </Text>
        </View>
            </View>
        <View style={styles.infoView}>
       <View style={styles.contactView}>
       <Image
          style={styles.socialLogo}
          source={require("./../Icons/Fb.png")}
        /> 
        <Image
          style={styles.socialLogo}
          source={require("./../Icons/Insta.png")}
        /> 
       </View>
        </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 32,
    paddingTop: 36,
  }
,
  infoText: {
    fontSize: 24,
    paddingLeft: 6
  },
  infoEmail:{
    fontSize: 24,
    paddingLeft: 6,
    color: "blue"
  },
  infoView: {
    paddingTop: 24,
  },
  infoImage:{
      width: 32,
      height: 32,
  },
  detailsView:{
      display: "flex",
      flexDirection: "row",
  },
  contactView:{
  display: "flex",
  flexDirection: "row",
  
},
  socialLogo:{
    width: 36,
    height: 36,
    marginRight: 30,
  }
});
