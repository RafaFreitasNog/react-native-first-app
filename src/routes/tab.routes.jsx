import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenSearch } from "../pages/ScreenSearch";
import { HomeStackRoutes } from "./stack.routes";

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={HomeStackRoutes} options={{
      headerShown: false,
      title: 'Menu',
    }}/>
      <Tab.Screen name="Search" component={ScreenSearch} options={{
        headerShown: false,
        title: 'Search',
      }} />
    </Tab.Navigator>
  )
}