import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import reducer from './reducers';

import Canvas from 'react-native-canvas';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NervousSquare />
      </Provider>
    );
  }
}

class NervousSquare extends Component {
  handleCanvas = (canvas) => {
    function init() {
      const p = 50;
      const ctx = canvas.getContext('2d');
      ctx.fillRect(96-p/2,54-p/2,p,p);
      requestAnimationFrame(draw);
    }
    const draw = () => {
      requestAnimationFrame(draw);
      const ctx = canvas.getContext('2d');
      const p = 50;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = 192;
      ctx.fillStyle = 'purple';
      ctx.rotate(Math.random()/100);
      ctx.fillRect(96-p/2,54-p/2,p,p);
      ctx.restore();
      
    };
    init();
    
    
    //ctx.fillStyle = 'purple';
    // ctx.fillRect(0, 0, 100, 100);
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Canvas ref={this.handleCanvas}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
