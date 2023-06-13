import { View, Text,StyleSheet, Button } from 'react-native'
import React from 'react'

const Member = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Member</Text>
      <Button title='MemberDetail' onPress={() => navigation.navigate("MemberDetailScreen")}/>
    </View>
  )
}

export default Member

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  