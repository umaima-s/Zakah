import React from 'react';
import { Stylesheet, Text, Button, ImageBackground, TextInput, View, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';

export default function ZakatCalculator() {

    return (
        <ImageBackground
                    source={require('../images/back.jpg')}

            // source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' }}
            style={{ width: null, height: null }}
            blurRadius={1}
        >

            <ScrollView>

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
                    <Formik
                        initialValues={{
                            gold: '', silver: '', cash_in_hand: '', cash_in_bank: '',
                            loans: '', property: '', business_assets: ''
                        }}
                        onSubmit={(values,actions) => {
                            // actions.resetForm();
                            console.log('values==>', values)
                            var total = +values.gold + +values.silver + +values.cash_in_hand + +values.cash_in_bank +
                                +values.loans + +values.property + +values.business_assets

                            if (total > 75000) {
                                var g = total * (2.5 / 100)
                                console.log('After 2.5% zakat=>', g)
                                alert('You are eligible to pay Zakat.\nPayable 2.5% Zakat Amount is:\n' + Math.round(g))
                                // {
                                //  <View>
                                //     <Text>Payable Zakat is = {g}</Text>
                                //  </View>   
                                // }
                                // Total(g);
                                Total=()=> {
                                    return g;
                                }
                            }
                            else {
                                console.log('You are not eligible to pay Zakat')
                                alert('You are not eligible to pay Zakat')
                            }
                            //     Total = (g) => {
                            //         return g;
                            // }
                        }}

                    >
                        {(props) => (
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
                                    placeholder='Enter Gold Value'
                                    onChangeText={props.handleChange('gold')}
                                    value={props.values.gold}
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
                                    onChangeText={props.handleChange('silver')}
                                    value={props.values.silver}
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
                                    onChangeText={props.handleChange('cash_in_hand')}
                                    value={props.values.cash_in_hand}
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
                                    onChangeText={props.handleChange('cash_in_bank')}
                                    value={props.values.cash_in_bank}
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
                                    onChangeText={props.handleChange('loans')}
                                    value={props.values.loans}
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
                                    onChangeText={props.handleChange('property')}
                                    value={props.values.property}
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
                                    }} placeholder='Enter Bussiness assets Amount'
                                    onChangeText={props.handleChange('business_assets')}
                                    value={props.values.business_assets}
                                    keyboardType='numeric'
                                />
                                <Button title='Submit' onPress={props.handleSubmit}
                                    style={{
                                        // backgroundColor: '#3B3B98',
                                        // padding: 15,
                                        // backgroundColor:'red',
                                        // borderRadius: 80,
                                        // marginBottom: 15
                                    }} />
                                    {/* <Text>Payable Zakat is = {`${g}`}</Text> */}
                            </View>
                        )}
                    </Formik>
                        {/* <Text>Payable Zakat is = {() => this.Total()}</Text> */}
                </View>
            </ScrollView>
        </ImageBackground>

    )
}
