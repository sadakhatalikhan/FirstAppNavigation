import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const PurpleScreen = () => {

    const Navigation = useNavigation()
    const {name, params} = useRoute()

    console.log('PurpleScreen route name: ', name)
    console.log('PurpleScreen route params: ', params)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purple Screen</Text>
      <TouchableOpacity onPress={() => Navigation.navigate("GoldScreen")}>
        <Text style={styles.navigationText}>Go to Gold Screen {'>>>'}</Text>
      </TouchableOpacity> 

      <Text style={styles.paramText}>Name: {params?.name}</Text>
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
    },
    navigationText: {
        fontSize: 15,
        marginTop: 20,
        textDecorationLine: 'underline',
        color: 'gold',
        fontWeight: 'bold',
    },
    paramText: {
        fontSize: 18,
        marginTop: 30,
        color: 'white',
        fontWeight: 'bold',
    }
})