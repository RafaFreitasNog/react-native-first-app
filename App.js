import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [pokemonArray, setPokemonArray] = useState([])

  function handlePrevButtonClick() {
    if (prevUrl) {
        setUrl(prevUrl)
    }
  }

  function handleNextButtonClick() {
    if (nextUrl) {
        setUrl(nextUrl)
    }
  }
  
  useEffect(() => {
    async function fetchPokemons() {
      try {        
        const response = await fetch(url)
        const responseJson = await response.json()
        setPokemonArray(responseJson.results)
        setNextUrl(responseJson.next)
        setPrevUrl(responseJson.previous)
      } catch (error) {
        console.log(error);
      }
    }

    fetchPokemons()
  }, [url])

  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.pageConteiner}>  
      <View style={styles.titleContainer}>
        <Text style={styles.listTitle}>Lista de Pokémons</Text>
      </View>
      <View style={styles.cardsConteiner}>
        <ScrollView>
          {pokemonArray.map((pokemon) => 
          <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          />
          )}
        </ScrollView>
      </View>
      <View style={styles.buttonsConteiner}>
        <Pressable style={[styles.button, (!prevUrl) && styles.disabled]}
        onPress={handlePrevButtonClick}
        pressRetentionOffset={30}
        hitSlop={10}
        disabled={(prevUrl) ? false : true}>
          <Text style={styles.buttonText}>prev</Text>
        </Pressable>
        <Pressable style={[styles.button, (!nextUrl) && styles.disabled]}
        onPress={handleNextButtonClick}
        pressRetentionOffset={30}
        hitSlop={10}
        disabled={(nextUrl) ? false : true}>
          <Text style={styles.buttonText}>next</Text>
        </Pressable>
      </View>
    </View>
    </>
  );
};

function PokemonCard(props) {
  return (
    <View style={styles.cardConteiner}>
      <Text style={styles.cardTitle}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageConteiner: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },  
  cardsConteiner: {
    height: 300,
    marginBottom: 32,
  },
  cardConteiner: {
    width: "100%",
    height: 48,
    backgroundColor: "#fb8500",
    marginBottom: 24,
    borderRadius: "50%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: "#fff"
  },
  buttonsConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: "#219ebc",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.4,
  },
});
