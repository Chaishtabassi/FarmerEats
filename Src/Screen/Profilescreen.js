import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profilescreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profilescreen</Text>
    </View>
  )
}

export default Profilescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
})