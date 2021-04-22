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
import ZakatCalculator from './screens/ZakatCalculator';
import ZakatCalc from './screens/ZakatCalc';
import GeneralQues from './screens/GeneralQues';
import HisabQues from './screens/HisabQues';
import AllQues from './screens/AllQues';
import Scenarios from './screens/Scenarios';
import Stocks from './screens/Stocks';
import FaqMain from './screens/FaqMain';
const App = () => {

  return (
    <View>
      {/* <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80' }}
        style={{ width: null, height: null }}
        blurRadius={0.5}
      > */}

        <ScrollView>
          {/* <FaqMain /> */}
          {/* <GeneralQues /> */}
          {/* <HisabQues /> */}
          {/* <Scenarios /> */}
          {/* <Stocks /> */}
          {/* <AllQues /> */}
      <ZakatCalc />
      {/* <ZakatCalculator /> */}
        </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%'
//   }
// })
export default App;
