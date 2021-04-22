import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView,ImageBackground } from "react-native";
import Faq1 from '../FAQ/Faq1';
import Faq2 from '../FAQ/Faq2';
import Faq3 from '../FAQ/Faq3';
import Faq5 from '../FAQ/Faq5';
import Faq10 from '../FAQ/Faq10';
import Faq11 from '../FAQ/Faq11';
import Faq12 from '../FAQ/Faq10';
import Faq14 from '../FAQ/Faq14';
import Faq19 from '../FAQ/Faq17';
import Faq17 from '../FAQ/Faq19';


class GeneralQues extends Component {
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
                    }}>General Questions</Text>
                <Faq1 />
                <Faq2 />
                <Faq3 />
                <Faq5 />
                <Faq10 />
                <Faq11 />
                <Faq12 />
                <Faq14 />
                <Faq17 />
                <Faq19 />

            </View>
              </ImageBackground>
            </ScrollView>
        );
    }
}

export default GeneralQues;