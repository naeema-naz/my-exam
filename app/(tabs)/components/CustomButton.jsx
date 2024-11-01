import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <View>
      <View className="mt-3"></View>
       <TouchableOpacity onPress={props.Hpress} className="bg_white rounded_full px=14 py-2 mt-4"></TouchableOpacity>
       <Text className="text-xl font-bold">
        {props.title}
       </Text>
    </View>
  )
}

export default CustomButton