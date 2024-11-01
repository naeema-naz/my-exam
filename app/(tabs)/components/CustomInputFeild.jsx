import { View, Text } from 'react-native'
import React from 'react'

const CustomInputFeild = (prop) => {
  return (
    <View className="mt-3">
      <Text className="font-bold text-xl">{prop.title}</Text>
      <View className="bg-pink-500 w-full px-2 py-2 rounded mt-2"></View>
      <TextInput className=""value={props.email}> on ChangeText={props.handleChange}</TextInput>
    </View>
  )
}

export default CustomInputFeild