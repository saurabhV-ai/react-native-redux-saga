import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={{fontSize: 30, textAlign: 'right', color: 'white'}}>0</Text>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'cornflowerblue',
  }
})

export default Header;
