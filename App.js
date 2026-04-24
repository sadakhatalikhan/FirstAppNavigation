import { StyleSheet } from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomScreenTabs from './src/navigation/BottomScreenTabs';

export default function App() {
  return (
    <NavigationContainer>
      <BottomScreenTabs />
    </NavigationContainer>
    
  );
}
