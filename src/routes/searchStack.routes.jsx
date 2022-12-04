import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenPokemon } from "../pages/ScreenPokemon";
import { ScreenSearch } from "../pages/ScreenSearch";

const SearchStack = createNativeStackNavigator();

function SearchStackRoutes() {
  return ( 
    <>
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={ScreenSearch} 
      options={{
        headerShown: false,
      }} />
      <SearchStack.Screen name="Pokemon" component={ScreenPokemon}/>
    </SearchStack.Navigator>
    </>
   );
}

export default SearchStackRoutes;