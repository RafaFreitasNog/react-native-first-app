import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenPokeList } from "../pages/ScreenPokeList";
import { ScreenPokemon } from "../pages/ScreenPokemon";

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name='Menu' component={ScreenPokeList} 
      options={{
        headerShown: false,
      }}/>
      <Screen name='Pokemon' component={ScreenPokemon} />
    </Navigator>
  )
}