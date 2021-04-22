import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, ImageBackground } from "react-native";
import Faq1 from './Faq1';
import Faq2 from './Faq2';
import Faq3 from './Faq3';
import Faq4 from './Faq4';
import Faq5 from './Faq5';
import Faq6 from './Faq6';
import Faq7 from './Faq7';
import Faq8 from './Faq8';
import Faq9 from './Faq9';
import Faq10 from './Faq10';
import Faq11 from './Faq11';
import Faq12 from './Faq12';
import Faq13 from './Faq13';
import Faq14 from './Faq14';
import Faq15 from './Faq15';
import Faq16 from './Faq16';
import Faq17 from './Faq17';
import Faq18 from './Faq18';
import Faq19 from './Faq19';
import Faq20 from './Faq20';
import Faq21 from './Faq21';

class Faq extends Component {
  render() {
    return (
      <ScrollView>
<ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' }}
        style={{ width: null, height: null }}
        blurRadius={0.5}
      >
      </ImageBackground>
        <View style={styles.centeredView}>
          {/* <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              marginBottom: 20
              // fontFamily: 'arial'
            }}>FAQ's</Text> */}
          <Faq1 />
          <Faq2 />
          <Faq3 />
          <Faq4 />
          <Faq5 />
          <Faq6 />
          <Faq7 />
          <Faq8 />
          <Faq9 />
          <Faq10 />
          <Faq11 />
          <Faq12 />
          <Faq13 />
          <Faq14 />
          <Faq15 />
          <Faq16 />
          <Faq17 />
          <Faq18 />
          <Faq19 />
          <Faq20 />
          <Faq21 />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    justifyContent: 'space-evenly',
    borderRadius: 20,
    padding: 20,
    elevation: 15
  },
  buttonOpen: {
    backgroundColor: "#388575",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify"
  }
});

export default Faq;