import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function ScreenPokemon({ route, navigation }) {

  const { pokemonUrl } = route.params
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${pokemonUrl}`)
      const responseJson = await response.json()
      setPokemon({
        image: responseJson.sprites.front_default ,
        name: responseJson.name,
        weight: responseJson.weight,
        height: responseJson.height,
      })
    }

    fetchData()
  }, [])

  return (
    <View style={styles.conteiner}>
      <View style={styles.cardShadow}>
        <LinearGradient 
        style={styles.card}
        colors={['#ffb703', '#fb8500']}
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.3, y: 1.0 }}
        >      
          <Text style={styles.name}>{pokemon.name}</Text>

          <View style={styles.imageConteiner}>
            <ImageBackground 
            source={require('../imgs/Pokemon-forest-by-BlazingIfrit-Fur-Affinity-dot-net.jpg')}
            style={styles.backgroundImage}
            >
              <Image 
              source={{uri: `${pokemon.image}`}}
              style={styles.image} />
            </ImageBackground>
          </View>
          <Text>{pokemon.weight}</Text>
          <Text>{pokemon.height}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center'
  }, 
  card: {
    backgroundColor: '#f5f',
    height: 600,
    marginHorizontal: 40,
    borderWidth: 6,
    borderRadius: 6,
    borderColor: '#212529',
    paddingHorizontal: 20,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginVertical: 12,
    color: '#212529'
  },
  imageConteiner: {
    backgroundColor: '#f8f9fa',
    height: '50%',
    borderWidth: 6,
    borderColor: '#adb5bd',
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: '100%',
  }, 
})