import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, ImageBackground } from "react-native";
import Faq from '../FAQ/Faq';
import back from '../images/back.jpg'
class AllQues extends Component {
    render() {
        return (
            <ScrollView>
              <ImageBackground
                    source={require('../images/back.jpg')}
                    //  source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' }}
                style={{ width: null, height: null }}
                blurRadius={0.5}
                 >
                    <View>
                    <Text
                        style={{
                            textAlign:'center',
                            fontSize: 35,
                            fontWeight: 'bold',
                            marginTop: 10,
                        }}>All Questions</Text>
                    <Faq />
                </View>
              </ImageBackground>
            </ScrollView>
        );
    }
}

export default AllQues;