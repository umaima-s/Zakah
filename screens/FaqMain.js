import React, { Component } from 'react';
import { Alert, Image, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
// import GeneralQues from './GeneralQues';
// import HisabQues from './HisabQues';
// import Scenarios from './Scenarios';
// import AllQues from './AllQues';
// import Stocks from './Stocks';

class FaqMain extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{
                width: '100%',
                height: '100%',

            }}>
                <Image
                    source={{ uri: 'https://www.pngarts.com/files/7/FAQ-Transparent-Background-PNG.png' }}
                    style={{ width: 380, height: 180, marginTop: 30 }}
                >

                </Image>


                <View style={{ height: 110, width: 200, flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/4/Question-Mark-PNG-High-Quality-Image.png' }}
                        style={{ width: 80, height: 80, marginTop: 20, marginLeft: 40 }}
                    >
                    </Image>

                    <Text
                        style={{
                            marginTop: 40,
                            fontStyle: 'italic',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: "#388575",

                        }}
                    >General Questions</Text>
                </View>
                <View style={{ height: 110, width: 600, flexDirection: 'row', backgroundColor:'#388575' }}>
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/4/Question-Mark-PNG-High-Quality-Image.png' }}
                        style={{ width: 80, height: 80, marginTop: 20, marginLeft: 40 }}
                    >
                    </Image>

                    <Text
                        style={{
                            marginTop: 40,
                            fontStyle: 'italic',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: "white",

                        }}
                    >Scenarios</Text>
                </View>
                <View style={{ height: 110, width: 200, flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/4/Question-Mark-PNG-High-Quality-Image.png' }}
                        style={{ width: 80, height: 80, marginTop: 20, marginLeft: 40 }}
                    >
                    </Image>

                    <Text
                        style={{
                            marginTop: 40,
                            fontStyle: 'italic',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: "#388575",

                        }}
                    >Hisab Questions</Text>
                </View>
                <View style={{ height: 110, width: 600, flexDirection: 'row',backgroundColor:'#388575' }}>
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/4/Question-Mark-PNG-High-Quality-Image.png' }}
                        style={{ width: 80, height: 80, marginTop: 20, marginLeft: 40 }}
                    >
                    </Image>

                    <Text
                        style={{
                            marginTop: 40,
                            fontStyle: 'italic',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: "white",

                        }}
                    >All Questions</Text>
                </View>

                <View style={{ height: 110, width: 200, flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/4/Question-Mark-PNG-High-Quality-Image.png' }}
                        style={{ width: 80, height: 80, marginTop: 20, marginLeft: 40 }}
                    >
                    </Image>

                    <Text
                        style={{
                            marginTop: 40,
                            fontStyle: 'italic',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: "#388575",

                        }}
                    >Stocks</Text>
                </View>
            </View>
            </ScrollView>
        );
    }
}

export default FaqMain;