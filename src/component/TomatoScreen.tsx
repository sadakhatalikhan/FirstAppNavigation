import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { vs } from 'react-native-size-matters'

const TomatoScreen = () => {
    const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato Screen</Text>
      <TouchableOpacity onPress={() => Navigation.navigate("PurpleScreen")}>
        <Text style={styles.navigationText}>Go to Purple Screen {'>>>'}</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text onPress={() => Navigation.navigate("PurpleScreen", {name: "sadakhat"})}>Name: Sadakhat</Text>
        <Text onPress={() => Navigation.navigate("PurpleScreen", {name: "Nawab"})}>Name: Nawab</Text>
      </View>  
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
    },
    navigationText: {
        fontSize: 15,
        marginTop: 20,
        textDecorationLine: 'underline',
        color: 'blue',
        fontWeight: 'bold',
    },
    textContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})