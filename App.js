import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ContactUs from './pages/ContactUs';
import DiscoverMatches from './pages/DiscoverMatches';
import EditPreference from './pages/EditPreference';
import EditProfile from './pages/EditProfile';
import Messages from './pages/Messages';
import RegisterPersonal from './pages/RegisterPersonal';
import SearchByPreferences from './pages/SearchByPreferences';

export default function App() {
  return (
    <View style={styles.container}>
     <ImageBackground source={require('./Icons/Bg.png')}  style={styles.image}>
    {/* <ContactUs/> */}
    {/* <DiscoverMatches/> */}
    {/* <EditPreference/> */}
    {/* <EditProfile/> */}
    {/* <Messages/> */}
    {/* <SearchByPreferences/> */}

    <RegisterPersonal/>



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
