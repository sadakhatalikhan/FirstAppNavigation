import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TomatoScreen from '../component/TomatoScreen';
import PurpleScreen from '../component/PurpleScreen';
import GoldScreen from '../component/GoldScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator id='TabNavigator'
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#f2R2f4', height: 60 },
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
      }}
    >
      <Tab.Screen options={{title: "Home", tabBarIcon: (color) => <AntDesign name="home" size={24} color={color} />}} name="TomatoScreen" component={TomatoScreen} />
      <Tab.Screen options={{title: "Profile", tabBarIcon: (color) => <AntDesign name="profile" size={24} color={color} />}} name="PurpleScreen" component={PurpleScreen} />
      <Tab.Screen options={{title: "Settings", tabBarIcon: (color) => <Feather name="settings" size={24} color={color} />}} name="GoldScreen" component={GoldScreen} />
    </Tab.Navigator>
  );
}