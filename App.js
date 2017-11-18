import React from 'react';
import { StyleSheet,
        Text,
        View } from 'react-native';
import Ripple from 'react-native-material-ripple'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Login With</Text>
          <Ripple style={styles.a}
                  onPress={this._logIn()}
          >
              <Text style={styles.text}>Facebook</Text>
          </Ripple>
      </View>
    );
  }

  _logIn() {
     console.log('gett it');
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'rgba(255,255,255,.87)',
    },
    a: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#433fe6',
    }
});
