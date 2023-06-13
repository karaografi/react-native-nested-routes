import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Member from './src/screens/member/Member';
import Profile from './src/screens/profile/Profile';
import MemberDetail from './src/screens/member/MemberDetail';
import MemberEdit from './src/screens/member/MemberEdit';
import ProfileEdit from './src/screens/profile/ProfileEdit';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberUpdateScreen" component={MemberEdit} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='ProfileScreen' component={Profile} />
      <Stack.Screen name='ProfileEditScreen' component={ProfileEdit} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                })}>
        <Tab.Screen options={{
          tabBarIcon:"home"
        }} name="Member" component={MemberStack} />
        <Tab.Screen 
        options={{
          tabBarIcon:"details",
          tabBarColor:"#FFF"
        }} name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
