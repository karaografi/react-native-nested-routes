import { View, Text,Button } from 'react-native'
import React from 'react'

const MemberDetail = ({navigation}) => {
  return (
    <View>
      <Text>MemberDetail</Text>
      <Button title='Member Edit' onPress={() => navigation.navigate("MemberUpdateScreen")}/>
    </View>
  )
}

export default MemberDetail