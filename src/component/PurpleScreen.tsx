import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PurpleScreen = () => {

    const Navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purple Screen</Text>
      <Button title="Go to Gold Screen" onPress={() => Navigation.navigate("GoldScreen")}></Button>
    </View>
  )
}

export default PurpleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
})