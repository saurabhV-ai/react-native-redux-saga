import { View, StyleSheet, ScrollView, Button } from 'react-native';
import Header from './components/header';
import Product from './components/product';

export default function RootLayout() {

  const products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      image: require('@/assets/images/phone.jpg')
    },
    {
      name: 'Apple iphone',
      color: 'black',
      price: 130000,
      image: require('@/assets/images/phone.jpg')
    },
    {
      name: 'Nokia Mobile',
      color: 'gray',
      price: 20000,
      image: require('@/assets/images/phone.jpg')
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
      {
        products.map((item) => 
          <Product item={item} />
      )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  }
})
