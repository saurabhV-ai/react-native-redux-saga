import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const Product = (props: any) => {

  const item = props.item
  const image = item.image

  return (  
    <View style={productStyles.container}>
      <Image style={{width: 100}} source={{uri:item.image}}></Image>
      <Text style={{fontSize: 24}} >{ item.name }</Text>
      <Text style={{fontSize: 24}} >{ item.price }</Text>
      <Text style={{fontSize: 24}} >{ item.color }</Text>
      <Image style={{width: 100, marginVertical: 10}} source={item.image}></Image>
      <Button title='Add to Cart'/>
    </View>
  )
}

const productStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  }
})

export default Product;
