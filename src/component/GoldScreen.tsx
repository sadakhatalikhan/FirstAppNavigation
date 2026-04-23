import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GoldScreen = () => {
    const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <Button title="Go to Tomato Screen" onPress={() => Navigation.navigate("TomatoScreen")}></Button>
    </View>
  )
}

export default GoldScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    }
})