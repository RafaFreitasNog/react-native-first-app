import React, { useState } from 'react';
import { Keyboard, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { SearchResultCard } from '../components/searchResultCard';

export function ScreenSearch({ navigation }) {

  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const [searchText, setSearchText] = useState('')
  const [searchedPokemon, setSearchedPokemon] = useState({})
  const [fetching, setFetching] = useState(false)

  const [defaultMessage, setDefaultMessage] = useState(true)
  const [noResultMessage, setNoResultMessage] = useState(false)
  const [resultMessage, setResultMessage] = useState(false)
  

  function handleSearchTextChange(value) {
    setSearchText(value)
    if (value == '') {
      setDefaultMessage(true)
      setNoResultMessage(false)
      setResultMessage(false)
    }
  }

  async function handleSearchSubmit(text) {
    if (text == '') {
      return
    }
    const treatedText = text.toLowerCase()
    setFetching(true)
    try {
      const response = await fetch(`${url}${treatedText}`)
      if (response.status == 404) {
        setNoResultMessage(true)
        setResultMessage(false)
      } else {
        const json = await response.json()
        const responsePokemon = {
          name: json.name,
          image: json.sprites.front_default,
          url: `${url}${treatedText}`,
        }
        setSearchedPokemon(responsePokemon)
        setResultMessage(true)
        setNoResultMessage(false)
      }
    } catch (error) {
      console.log(error);
    }
    setDefaultMessage(false)
    setFetching(false)
  }

  function handlePokemonPress(url) {
    navigation.navigate('Pokemon', {
      pokemonUrl: url,
    })
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchbarConteiner}>
        <TextInput
          style={styles.searchInput}
          placeholder='Buscar por Pokémons'
          placeholderTextColor='#adb5bd'
          value={searchText}
          returnKeyType='search'
          onChangeText={(value) => { handleSearchTextChange(value) }}
          onSubmitEditing={(event) => { handleSearchSubmit(event.nativeEvent.text) }}
        >
        </TextInput>
      </View>
      <ScrollView style={styles.pageContent}
      keyboardDismissMode='on-drag'>

        {fetching &&
          <View style={styles.centerMessageConteiner}>
            <Text style={styles.pageCenterText} >Loading...</Text>
          </View>}

        {(!fetching && noResultMessage) &&
          <View style={styles.centerMessageConteiner}>
            <Text style={styles.notFoundEmoticon}>: /</Text>
            <Text style={styles.pageCenterText}>No results found</Text>
          </View>}

        {(!fetching && defaultMessage) &&
          <View style={styles.centerMessageConteiner}>
            <Ionicons name='search' style={styles.notFoundEmoticon} />
            <Text style={styles.pageCenterText}>Procure por um Pokémon!</Text>
          </View>}

        {(!fetching && resultMessage) &&
        <>
        <Pressable 
        onPress={() => {handlePokemonPress(searchedPokemon.url)}}>
          <SearchResultCard 
          name={searchedPokemon.name}
          imageUrl={searchedPokemon.image}
          />
        </Pressable>
        </>
         }

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  searchbarConteiner: {
    height: 72,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 48,
    width: '92%',
    backgroundColor: '#F5F5F5',
    color: '#adb5bd',
    paddingLeft: 24,
    borderRadius: 6,
  }, 
  pageContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#iii',
  },
  pageCenterText: {
    color: '#adb5bd',
    fontSize: 20,
    fontWeight: 'bold',
  },
  centerMessageConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  notFoundEmoticon: {
    color: '#adb5bd',
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});