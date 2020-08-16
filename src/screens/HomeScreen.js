import * as React from 'react';
import {Button, Text, View} from 'react-native';
import ProductList from '../components/ProductList';

import {useSelector} from 'react-redux';
const HomeScreen = () => {
  const firstName = useSelector((state) => state.auth.user.firstName);
  return (
    <View>
      <Text>Signed in!</Text>
      <Text>Welcome! {firstName}</Text>

      <Button title="Sign out" onPress={() => console.log('Logout')} />
      <ProductList />
    </View>
  );
};

export default HomeScreen;
