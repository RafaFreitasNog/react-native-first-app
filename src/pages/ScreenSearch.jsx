import React, { useState } from 'react';
import { Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export function ScreenSearch() {

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
    setFetching(true)
    try {
      const response = await fetch(`${url}${text}`)
      if (response.status == 404) {
        setNoResultMessage(true)
        setResultMessage(false)
      } else {
        const json = await response.json()
        const responsePokemon = {
          name: json.name,
          image: json.sprites.front_default,
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

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.searchbarConteiner}>
          <TextInput
          style={styles.searchInput}
          placeholder='Buscar por Pokémons'
          placeholderTextColor= '#adb5bd'
          value={searchText}
          returnKeyType='search'
          onChangeText={(value) => {handleSearchTextChange(value)}}
          onSubmitEditing={(event) => {handleSearchSubmit(event.nativeEvent.text)}}
          >
          </TextInput>
        </View>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <View style={styles.pageContent}>

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
            <Text style={styles.notFoundEmoticon}>nice</Text>
            <Text style={styles.pageCenterText}>Procure por um Pokémon!</Text>
          </View>}

          {(!fetching && resultMessage) && 
          <Pressable>
            <Text>
              {searchedPokemon.name}
            </Text>
          </Pressable>}

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1
  },
  searchbarConteiner: {
    height: 72,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 48,
    width: '92%',
    backgroundColor: '#f8f9fa',
    color: '#adb5bd',
    paddingLeft: 24,
    borderRadius: 6,
  }, 
  pageContent: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
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