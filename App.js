/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ZakatCalculator from './screens/ZakatCalculator';
import ZakatCalc from './screens/ZakatCalc';
import Cal from './screens/Cal';
import GeneralQues from './screens/GeneralQues';
import HisabQues from './screens/HisabQues';
import AllQues from './screens/AllQues';
import Scenarios from './screens/Scenarios';
import Stocks from './screens/Stocks';
import FaqMain from './screens/FaqMain';
import History from './screens/History';
import HistoryInfo from './screens/HistoryInfo';
const Stack = createStackNavigator();

const App = () => {

  return (
    <View>
        {/* <ImageBackground
    //     source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' }}
    //     style={{ width: null, height: null }}
    //     blurRadius={0.5}
    //   > */}

      {/* //   // <ScrollView>
    //     {/* <FaqMain /> */}
         {/* <GeneralQues /> */}
         {/* <HisabQues /> */}
         {/* <Scenarios /> */}
         {/* <Stocks /> */}
         {/* <AllQues /> */}
      {/* // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Details" component={HistoryInfo} />
    //     <Stack.Screen name="History" component={History} />
    //     <Stack.Screen name="Zakat Calculator" component={ZakatCalc} />
    //   </Stack.Navigator>
    // </NavigationContainer> */}
      <HistoryInfo />
      {/* //  <Cal /> */}
      {/* <ZakatCalculator /> */}
      {/* //       // </ScrollView> */}
      {/* </ImageBackground> */}
    </View>
  );
}
export default App;
