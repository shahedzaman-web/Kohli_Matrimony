import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import DiscoverMatches from '../pages/DiscoverMatches';
import Messages from '../pages/Messages';
import SearchScreen from '../pages/SearchScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
   <Tab.Navigator
   tabBarOptions={{
       showLabel: false,
       backgroundColor: "#8D2828",
   }}
   
   >
       <Tab.Screen name="Home" component={HomeScreen}  options={{
           tabBarIcon: ({ focused }) => (
               <View style={{}}>
                   <Text style={{ color: 'white' }}>Home</Text>
                
               </View>

           )
       }}/>
       <Tab.Screen name="Matches" component={DiscoverMatches}/>
       <Tab.Screen name="Messages" component={Messages}/>
       <Tab.Screen name="Search" component={SearchScreen}/>
       </Tab.Navigator>
  );
}
