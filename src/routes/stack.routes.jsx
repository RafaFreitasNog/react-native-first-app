import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenPokeList } from "../pages/ScreenPokeList";
import { ScreenPokemon } from "../pages/ScreenPokemon";

const HomeStack = createNativeStackNavigator()

export function HomeStackRoutes() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='PokemonList' component={ScreenPokeList} 
      options={{
        headerShown: false,
      }}/>
      <HomeStack.Screen name='Pokemon' component={ScreenPokemon} />
    </HomeStack.Navigator>
  )
}