import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export function ScreenSearch() {

  const [searchText, setSearchText] = useState('')

  function handleSearchTextChange(value) {
    setSearchText(value)
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchbarConteiner}>
        <TextInput
        style={styles.searchInput}
        placeholder='Buscar por Pokémons'
        value={searchText}
        onChangeText={(value) => {handleSearchTextChange(value)}}>
        </TextInput>
      </View>
      <View style={styles.pageContent}>
        <Text style={styles.pageCenterText}>Procure por um Pokémon!</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageCenterText: {
    color: '#adb5bd'
  },
});