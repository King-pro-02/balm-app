import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const HomeLayout = () => {
  return (
    <Stack 
    screenOptions={{
      headerShown: false,
    }}/>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})