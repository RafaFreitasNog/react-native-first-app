import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SearchResultCard() {
  return (
    <View style={styles.conteiner}>
      <View style={styles.imgConteiner}>

      </View>
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
  },
  imgConteiner: {
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    borderRadius: 6,
  },
})
