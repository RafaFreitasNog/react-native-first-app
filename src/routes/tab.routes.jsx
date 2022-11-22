import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenSearch } from "../pages/ScreenSearch";
import { HomeStackRoutes } from "./stack.routes";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#fb8500',
    }}
    >
      <Tab.Screen name="Home" component={HomeStackRoutes} 
      options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen name="Search" component={ScreenSearch} 
      options={{
        headerShown: false,
        title: 'Search',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="search" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  )
}