import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TomatoScreen = () => {
    const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato Screen</Text>
      <Button title="Go to Purple Screen" onPress={() => Navigation.navigate("PurpleScreen")}></Button>
    </View>
  )
}

export default TomatoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
})