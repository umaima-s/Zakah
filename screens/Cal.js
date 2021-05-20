import React, { useState } from 'react';
import { Stylesheet, Text, Button, ImageBackground, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import History from './History'
export default function Cal() {
    const [gold, setGold] = useState()
    const [silver, setSilver] = useState()
    const [cash_in_hand, setCashHand] = useState()
    const [cash_in_bank, setCashBank] = useState()
    const [loans, setLoans] = useState()
    const [property, setProperty] = useState()
    const [business_assets, setBusiness] = useState()
    const [isSubmited, setSubmited] = useState(false)
    const [total, setTotal] = useState()
    const [zak, setZakat] = useState()


    // no_data_added = () => {
    //     SetSubmited(false)
    // }

    const addData = (gold, silver, cash_in_hand, cash_in_bank, loans, property, business_assets) => {
        // this.setState({
        setTotal(+gold + +silver + +cash_in_hand + +cash_in_bank + +loans + +property + +business_assets)
        setZakat((total * 2.5) / 100)
        // if (this.state.total < 100) {
        //     alert('You are not eligible to pay Zakat')
        // }

    }


    // sendCred = (gold, silver, cash_in_hand, cash_in_bank, loans, property, business_assets, total, zak) => {
    //     fetch("http://localhost:3000/history"
    //         , {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "gold": this.state.gold,
    //                 "silver": this.state.silver,
    //                 "cash_in_hand": this.state.cash_in_hand,
    //                 "cash_in_bank": this.state.cash_in_bank,
    //                 "loans": this.state.loans,
    //                 "property": this.state.property,
    //                 "business_assets": this.state.business_assets,
    //                 "total": this.state.total,
    //                 "zak": this.state.zak,
    //             })
    //         })
    //         .then(res => res.json())
    //         .then((data) => {
    //             // try {
    //             // await AsyncStorage.setItem('token', data.token);
    //             //     props.navigation.replace("home")
    //             // } catch (e) {
    //             //     console.log("error hai", e)
    //             // }
    //             console.log("data==>", data);
    //         })
    //         .catch((err) => {
    //             console.log("error is==>", err)
    //         })
    //     // console.log('Gold=>', this.state.gold, "Silver=>", this.state.silver)
    // }
    return (
        // <ImageBackground
        //     source={require('../images/back.jpg')}
        //     // source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' }}
        //     style={{ width: null, height: null }}
        //     blurRadius={1}
        // >
        // <KeyboardAwareScrollView keyboardShouldPersistTaps="always" >

        <ScrollView >
            <View>
                <View >
                    <Text style={{
                        color: 'black',
                        marginTop: 10,
                        marginBottom: 20,
                        paddingLeft: 15,
                        fontWeight: 'bold',
                        fontSize: 35
                    }}>ZAKAT CALCULATOR</Text>
                </View>
                <View>

                    <Text style={{
                        color: 'black',
                        marginBottom: 10,
                        paddingLeft: 90,
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>GOLD AND GOLD JEWELRY</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }}
                        onChangeText={input => setGold(input)}
                        placeholder='Enter Gold Value'
                        value={gold}
                        keyboardType='numeric'
                    />

                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: 10,
                        paddingLeft: 80,
                        fontSize: 15
                    }}>SILVER AND SILVER JEWELRY</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }}

                        placeholder='Enter Silver Value'
                        onChangeText={input => setSilver(input)}
                        value={silver}
                        keyboardType='numeric'
                    />
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        marginBottom: 10,
                        paddingLeft: 130,
                        fontSize: 15
                    }}>CASH IN HAND</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }} placeholder='Enter Cash in hand Amount'
                        onChangeText={input => setCashHand(input)}
                        value={cash_in_hand}
                        keyboardType='numeric'
                    />
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: 10,
                        paddingLeft: 130,
                        fontSize: 15
                    }}>CASH IN BANK</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }} placeholder='Enter Cash in bank Amount'
                        onChangeText={input => setCashBank(input)}
                        value={cash_in_bank}
                        keyboardType='numeric'
                    />
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: 10,
                        paddingLeft: 90,
                        fontSize: 15
                    }}>LOANS GIVEN TO OTHERS</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }}
                        placeholder='Enter loans Amount'
                        onChangeText={input => setLoans(input)}
                        value={loans}
                        keyboardType='numeric'
                    />

                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: 10,
                        paddingLeft: 50,
                        fontSize: 15
                    }}>PROPERTY (FOR BUSINESS OR SELLING)</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }} placeholder='Enter Property value'
                        onChangeText={input => setProperty(input)}
                        value={property}
                        keyboardType='numeric'
                    />

                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: 10,
                        paddingLeft: 70,
                        fontSize: 15
                    }}>BUSINESS ASSETS (INVENTORY)</Text>
                    <TextInput
                        style={{
                            height: 40,
                            backgroundColor: 'rgba(255,255,255,.5)',
                            paddingLeft: 20,
                            marginBottom: 15,
                            borderRadius: 80,
                            fontSize: 15,
                        }}
                        placeholder='Enter Bussiness assets Amount'
                        onChangeText={input => setBusiness(input)}
                        value={business_assets}
                        keyboardType='numeric'
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            marginBottom: 15,
                            alignItems: 'center',
                            marginLeft: 20

                        }}>

                        <Button
                            title='Calculate'
                            onPress={() => {
                                addData(
                                    gold,
                                    silver,
                                    cash_in_hand,
                                    cash_in_bank,
                                    loans,
                                    property,
                                    business_assets);
                                // this.sendCred(
                                //     this.state.gold,
                                //     this.state.silver,
                                //     this.state.cash_in_hand,
                                //     this.state.cash_in_bank,
                                //     this.state.loans,
                                //     this.state.property,
                                //     this.state.business_assets
                                // );
                            }
                            }
                            style={{
                                // backgroundColor: '#3B3B98',
                                // padding: 15,
                                // backgroundColor:'red',
                                // borderRadius: 80,
                                // marginBottom: 15
                            }}
                        >
                        </Button>

                        <Text
                            style={{
                                fontSize: 16,
                                fontStyle: "italic",
                                fontWeight: 'bold',
                                color: 'green',
                                marginLeft: 10
                            }}>
                            PAYABLE ZAKAT = {zak}
                        </Text>
                    </View>
                    <View>
                        <Button
                            title="history"
                            // {/* <Text
                            // style={{
                            //     fontSize:50
                            // }} */}
                            // onPress={() => this.props.navigation.navigate('History',{P1:this.state.zak})}>
                            onPress={() => this.props.navigation.navigate('History')}>
                            {/* Check History</Text> */}
                        </Button>
                    </View>

                </View>
            </View>

        </ScrollView>
        // </KeyboardAwareScrollView>
        // {/* </ImageBackground > */ }

    )
}