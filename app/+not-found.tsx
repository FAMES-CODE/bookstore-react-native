import { View } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import styles from '@/styles/style'
import { useRouter } from 'expo-router'

export default function NotFound() {
  const router = useRouter()
  return (
    <View style={[styles.view, styles.container, {
      alignItems: "center",
    }]}>
      <Text variant="titleLarge" style={[styles.h1, {
        color: "#000",
      }]}>This page does not exist</Text>
      <Button style={[styles.h1, {
        color: "#000",
      }]} mode="outlined" textColor='black' onPress={() => router.navigate( "/")}>Go back to home</Button>
    </View>
  )
}