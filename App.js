import React from "react";
import { StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';

const Test = () => {
  const title = "Tracker";
  return (
    <View style={{flex:1,flexDirection: 'column'}}>
      <View style={{width:420, height:80, backgroundColor:'yellow'}} />
      
      <Text style={{alignSelf:'flex-start',
                    bottom:43,
                    fontFamily: 'monospace',
                    fontSize:42,
                    textDecorationLine: 'underline'
                    }}>
        Self-Track</Text>

      <View style={{width:420, height:537, backgroundColor:'white'}} />

      <Text style={{alignSelf:'flex-start',
                    top: -550,
                    marginLeft: 55,
                    fontSize:23
                    }}>
          Type in your goal to keep track</Text>

      <View style={{width:420, height:85, backgroundColor:'grey'}} />


    </View>
  );
}

export default Test;
