import { createStackNavigator } from '@react-navigation/stack'
import PurpleScreen from '../component/PurpleScreen'
import GoldScreen from '../component/GoldScreen'
import TomatoScreen from '../component/TomatoScreen'

const Stack = createStackNavigator()

function MainStackNavigator () {
  return (
      <Stack.Navigator id="MainStack" 
        screenOptions={{headerShown: false}}
        initialRouteName='TomatoScreen'
      >
        <Stack.Screen name='PurpleScreen' component={PurpleScreen} />
        <Stack.Screen name='GoldScreen' component={GoldScreen} />
        <Stack.Screen name='TomatoScreen' component={TomatoScreen} />
      </Stack.Navigator>
  )
}

export default MainStackNavigator