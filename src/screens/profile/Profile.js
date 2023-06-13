import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title='Member Edit' onPress={() => navigation.navigate("ProfileEditScreen")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  