import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GoldScreen = () => {
    const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <TouchableOpacity onPress={() => Navigation.navigate("TomatoScreen")}>
      <Text style={styles.navigationText}>Go to Tomato Screen {'>>>'}</Text>
      </TouchableOpacity>
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
    },
    navigationText: {
        fontSize: 15,
        marginTop: 20,
        textDecorationLine: 'underline',
        color: 'blue',
        fontWeight: 'bold',
    }
})