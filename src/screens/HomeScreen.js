import * as React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={() => console.log('Logout')} />
    </View>
  );
};

export default HomeScreen;
