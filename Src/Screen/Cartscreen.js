import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cartscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cartscreen</Text>
    </View>
  )
}

export default Cartscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
})