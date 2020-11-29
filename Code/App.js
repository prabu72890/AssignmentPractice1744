import * as React from 'react';
import { Text, View, Image, StyleSheet , Button,Alert} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/Logo';
import EmailInput from './components/TextInput';
// import Button from './components/ButtonLog';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>

      <Card>
        <AssetExample />
        <EmailInput/>
        
      </Card>
      <View style={styles.button}>
      <Button 
        title="Send"
        color="#EE2A7B"
        
        onPress={() => Alert.alert('Thank you, check your Email')}
      />
    </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 25,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#F8CDF9',
    paddingBottom:100
    
  },

  button:{
    margin:16,
    padding:16,
  },

});
