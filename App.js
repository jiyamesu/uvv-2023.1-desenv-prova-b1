import { StyleSheet, Text, View } from 'react-native';

import Item from "./src/components/Item"

const itens = require('./assets/item.json');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Troca Meu Item!</Text>
      <View>
        {itens.map(item => <Item item={item}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
