import React, { Component } from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView,AppRegistry } from 'react-native';
import { Avatar  } from "react-native-paper";
import Swiper from 'react-native-swiper/src';
// import BottomNavigation from '../navigation/BottomNavigation';
import Screen from '../components/Screen';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

AppRegistry.registerComponent('myproject', () => SwiperComponent)
export default function HomeScreen() {
  return (
<Screen>
<View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.logoImage} source={require('./../images/Logo.png')} />
        <Image style={styles.menuImage} source={require('./../Icons/Menu.png')} />
        </View>  
        <View>
        <Swiper style={styles.wrapper}>
        <View style={styles.slide}>
          <Image style={styles.slideImage} source={require('./../images/images.jpeg')} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.slideImage} source={require('./../images/images.jpeg')} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.slideImage} source={require('./../images/images.jpeg')} />
        </View>
        </Swiper>
        </View>
        <ScrollView >
        <View style={styles.memberContainer}>
          <Text style={styles.titleText}>New Member</Text>
        <TouchableOpacity style={styles.memberView}>
            <Avatar.Image size={64} source={require("./../images/face.jpg")} />
            <View style={styles.memberText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>29 Yrs, 5'8'',B.Tech,</Text>
              <Text>Banking Profressional</Text>
              <Text>Jaipur</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberView}>
            <Avatar.Image size={64} source={require("./../images/face.jpg")} />
            <View style={styles.memberText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>29 Yrs, 5'8'',B.Tech,</Text>
              <Text>Banking Profressional</Text>
              <Text>Jaipur</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberView}>
            <Avatar.Image size={64} source={require("./../images/face.jpg")} />
            <View style={styles.memberText}>
              <Text style={styles.nameText}>Laksh</Text>
              <Text>29 Yrs, 5'8'',B.Tech,</Text>
              <Text>Banking Profressional</Text>
              <Text>Jaipur</Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.machesView}>
        <TouchableOpacity style={styles.matchesBtn}>
          <Text style={styles.machesText}>View All Matches</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.discoverView}>
          <Text style={styles.titleText}>Discover Matches</Text>
          <View style={styles.discoverOptions}>
            <TouchableOpacity style={styles.optionContainer}>
          <Image style={styles.optionImages} source={require('./../Icons/City.png')} />
          <Text style={styles.optionText}>City</Text>
          <Text style={styles.optionDes}>2 Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
          <Image style={styles.optionImages} source={require('./../Icons/Profession.png')} />
          <Text style={styles.optionText}>Profession</Text>
          <Text style={styles.optionDes}>2 Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
          <Image style={styles.optionImages} source={require('./../Icons/Education.png')} />
          <Text style={styles.optionText}>Education</Text>
          <Text style={styles.optionDes}>2 Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
          <Image style={styles.optionImages} source={require('./../Icons/Featured.png')} />
          <Text style={styles.optionText}>Featured</Text>
          <Text style={styles.optionDes}>2 Matches</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.storyContainer}>
          <Text style={styles.storyTitleText}>Successful Stories</Text>
          <View style={styles.cardContainer}>
          <TouchableOpacity>
          <View style={styles.cardStyle}>
    <Image style={styles.storyImage} source={require('./../images/images.jpeg')} />
    <View>
      <Text style={styles.cardTitle}>Viral & Nidhi</Text>
      <Text style={styles.textDetails}>5 mounths ago</Text>
    </View>
  </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.cardStyle}>
    <Image style={styles.storyImage} source={require('./../images/images.jpeg')} />
    <View>
    <Text style={styles.cardTitle}>Viral & Nidhi</Text>
    <Text  style={styles.textDetails}>5 mounths ago</Text>
    </View>
  </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.cardStyle}>
    <Image style={styles.storyImage} source={require('./../images/images.jpeg')} />
    <View>
    <Text style={styles.cardTitle}>Viral & Nidhi</Text>
    <Text  style={styles.textDetails}>5 mounths ago</Text>
    </View>
  </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.cardStyle}>
    <Image style={styles.storyImage} source={require('./../images/images.jpeg')} />
    <View>
    <Text style={styles.cardTitle}>Viral & Nidhi</Text>
      <Text style={styles.textDetails}>5 mounths ago</Text>
    </View>
  </View>
          </TouchableOpacity>
          </View>
        </View>
        </ScrollView>

     </View>
      
  
</Screen>
   
  );
}


const styles = StyleSheet.create({
  wrapper: {  
    // height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage:{
    // width:"100%",
    // height: 180
  },
  container:{
    paddingTop: 10
  },
  topView:{
    display:'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  logoImage:{
    width:60,
    height:60,
  },menuImage:{
    width:40,
    height:40,
  }, memberView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  machesView:{
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },matchesBtn:{
    backgroundColor: "#8D2828",
    padding: 10,
    width: 150,
    height: 40,
    borderRadius: 10,
  },machesText:{
    textAlign:'center',
    color: 'white',
  },discoverOptions:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },optionImages:{
    width:80,
    height:80,
  },optionText:{
    textAlign:'center',
    color: "#8D2828",
  },optionDes:{
    textAlign:'center',
  },
  memberContainer:{
    paddingLeft:16
  },
  memberText: {
    marginLeft: 32,
  },discoverView:{
    padding: 10
  },storyContainer:{
  
    backgroundColor: "#fff",
    
  },cardContainer:{
    display: "flex",
    flexDirection: "row",
    
  },
  storyImage:{
    width: 90,
    height: 90,
  },storyTitleText:{
    color: "#8D2828",
    textAlign:'center',
    fontSize: 20,
    marginTop:10,
    marginBottom:10
  },optionContainer:{
    marginLeft: 6,
  },
  cardStyle:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },cardContainer:{
    display: "flex",
    flexDirection: "row"
  },cardTitle:{
    color: "#8D2828",
    textAlign:'center',
  },textDetails:{
fontSize: 8,
textAlign:'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },titleText:{
    color: "#8D2828",
    fontSize: 20,
  }
})