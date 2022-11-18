import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function ScreenPokemon({ route, navigation }) {

  const { pokemonUrl } = route.params
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${pokemonUrl}`)
      const responseJson = await response.json()
      console.log(responseJson);
      setName(responseJson.name)
      setWeight(responseJson.weight)
      setHeight(responseJson.height)
    }

    fetchData()
  }, [])

  return (
    <View>
      <Text>{name}</Text>
      <Text>{weight}</Text>
      <Text>{height}</Text>
    </View>
  );
}