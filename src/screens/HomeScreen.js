import * as React from 'react';
import {Button, Text, View} from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={() => console.log('Logout')} />
      <ProductList />
    </View>
  );
};

export default HomeScreen;
