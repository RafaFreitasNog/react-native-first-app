import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function SearchResultCard(props) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.imgConteiner}>
        <Image source={{uri: `${props.imageUrl}`}} style={styles.pokemonImage} />
      </View>
      <Text style={styles.pokemonName}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    height: 80,
    backgroundColor: '#fb8500',
    marginBottom: 40,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgConteiner: {
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    borderRadius: 6,
  },
  pokemonImage: {
    width: '100%',
    height: '100%'
  },
  pokemonName: {
    marginLeft: 24,
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: "#fff"
  },
})
