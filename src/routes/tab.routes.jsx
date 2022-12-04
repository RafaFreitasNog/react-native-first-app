import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenSearch } from "../pages/ScreenSearch";
import { HomeStackRoutes } from "./homeStack.routes";
import { Ionicons } from '@expo/vector-icons';
import SearchStackRoutes from "./searchStack.routes";

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#fb8500',
      tabBarStyle: {backgroundColor: '#FAFAFA'}
    }}
    >
      <Tab.Screen name="TabHome" component={HomeStackRoutes} 
      options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen name="TabSearch" component={SearchStackRoutes} 
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