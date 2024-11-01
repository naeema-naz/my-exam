import { View, Text, Button } from 'react-native'
import React from 'react'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View style ={{flex:1, backgroundColor:"lightblue "}}>
        <view style={{padding: 20}}></view>
      <Text style={{color :'blue', fontWeight:'bold', fontSize:20}}>welcome</Text>
      <Button title="sign Up" onPress={() => ReadableStreamDefaultController.puch("/(outh)/signup")}></Button>
      <Button title="login" onPress={() => ReadableStreamDefaultController.puch("/(outh)/signup")}></Button>

    
    </View>
    
  )
}

export default index