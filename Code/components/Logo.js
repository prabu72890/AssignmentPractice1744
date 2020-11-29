import * as React from 'react';
import { Text, View, StyleSheet, Image ,TextInput} from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/dosicLogo.png')} />

      <Text style={styles.paragraph}>
        hey, music buddy
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'#FCDF9',
    
  },
  paragraph: {
    margin: 12,
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#92278F',
  },
  logo: {
    height: 67,
    width: 225,
  }
});
