import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export function ScreenPokeList({ navigation }) {

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [pokemonArray, setPokemonArray] = useState([])

function handlePokemonPress(url) {
  navigation.navigate('Pokemon', {
    pokemonUrl: url,
  })
}

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
    <SafeAreaView style={styles.safeAreaView}>  
      <View style={styles.pageConteiner}>
        <View style={styles.titleContainer}>
          <Text style={styles.listTitle}>Lista de Pokémons</Text>
        </View>
        <View style={styles.cardsConteiner}>
          <ScrollView>
            {pokemonArray.map((pokemon) => 
            <Pressable 
            onPress={() => {handlePokemonPress(pokemon.url)}}
            key={pokemon.name}
            >
              <PokemonCard
              name={pokemon.name}
              />
            </Pressable>
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
    </SafeAreaView>
    </>
  );
}

function PokemonCard(props) {
  return (
    <View style={styles.cardConteiner}>
      <Text style={styles.cardTitle}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  }, 
  pageConteiner: {
    flex: 1,
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
    borderRadius: 6,
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.4,
  },
});
