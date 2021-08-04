import React from 'react';
import { View, Text ,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default function BottonMenu() {
  return (
    <>
      <TouchableOpacity style={styles.menuView}>
  <Image style={styles.menuImage} source={require('../Icons/Home_.png')} />
  <Text style={styles.menuText} >Home</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuView}>
  <Image style={styles.menuImage} source={require('../Icons/Home_.png')} />
  <Text style={styles.menuText} >Matches</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuView}>
  <Image style={styles.menuImage} source={require('../Icons/Messages.png')} />
  <Text style={styles.menuText} >Messages</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuView}>
  <Image style={styles.menuImage} source={require('../Icons/Search.png')} />
  <Text style={styles.menuText} >Search</Text>
  </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  menuView:{
    display:'flex',
    flexDirection: "column",
    alignItems: "center",
    paddingTop:4,
    paddingLeft: 16,
    paddingRight: 16,
  },menuImage:{
    width:30,
    height:30,
  }
  ,menuText:{
    color:"white",
    fontSize:12,
  }
});