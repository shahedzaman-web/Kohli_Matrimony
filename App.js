import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import ContactUs from './pages/ContactUs';
import DiscoverMatches from './pages/DiscoverMatches';
import EditPreference from './pages/EditPreference';
import EditProfile from './pages/EditProfile';
import Messages from './pages/Messages';
import RegisterPersonal from './pages/RegisterPersonal';
import SearchByPreferences from './pages/SearchByPreferences';
import HomeScreen from './pages/HomeScreen';
//navigation menu
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Messages" component={Messages} options={{headerShown: false}} />
    //     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    //     <Stack.Screen name="Contact Us" component={ContactUs} options={{headerShown: false}} />
    //     <Stack.Screen name="Discover Matches" component={DiscoverMatches} options={{headerShown: false}} />
    //     <Stack.Screen name="Edit Preference" component={EditPreference} options={{headerShown: false}} />
    //     <Stack.Screen name="Edit Profile" component={EditProfile} options={{headerShown: false}} />
    //     <Stack.Screen name="Register Personal" component={RegisterPersonal} options={{headerShown: false}} />
    //     <Stack.Screen name="Search By Preferences" component={SearchByPreferences} options={{headerShown: false}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen />

  
    // {/* <ContactUs/> */}
    // {/* <DiscoverMatches/> */}
    // <EditPreference/>
    // {/* <EditProfile/> */}
    // {/* <Messages/> */}
    //    {/* <RegisterPersonal/> */}



    
  );
}

