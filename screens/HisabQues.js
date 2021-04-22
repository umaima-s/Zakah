import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView ,ImageBackground} from "react-native";
import Faq9 from '../FAQ/Faq9';
import Faq10 from '../FAQ/Faq10';
import Faq12 from '../FAQ/Faq12';
import Faq13 from '../FAQ/Faq13';
import Faq14 from '../FAQ/Faq14';
import Faq16 from '../FAQ/Faq16';
import Faq17 from '../FAQ/Faq17';
import Faq20 from '../FAQ/Faq20';


class HisabQues extends Component {
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
                    }}>Hisab Questions</Text>
                <Faq9 />
                <Faq10 />
                <Faq12 />
                <Faq13 />
                <Faq14 />
                <Faq16 />
                <Faq17 />
                <Faq20 />

            </View>
              </ImageBackground>
            </ScrollView>
        );
    }
}

export default HisabQues;